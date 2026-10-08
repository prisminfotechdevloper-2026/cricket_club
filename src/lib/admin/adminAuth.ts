export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  lastLogin?: string;
}

export interface AdminSession {
  token: string;
  user: AdminUser;
  expiresAt: number;
}

export const DEFAULT_ADMIN_USER: AdminUser = {
  id: "dcc-admin-01",
  name: "Harsh Gala",
  email: "admin@devpurcc.com",
  role: "DCC Committee Lead",
  department: "Devpur Cricket Club Management",
  lastLogin: "Active Now",
};

export const DEMO_CREDENTIALS = {
  email: "admin@devpurcc.com",
  password: "admin123",
};

const STORAGE_KEY = "dcc_admin_session_v1";

export function getStoredSession(): AdminSession | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const session = JSON.parse(raw) as AdminSession;
    if (session.expiresAt && Date.now() > session.expiresAt) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return session;
  } catch {
    return null;
  }
}

export function saveSession(user: AdminUser = DEFAULT_ADMIN_USER): AdminSession {
  const session: AdminSession = {
    token: `dcc_dummy_token_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
    user,
    expiresAt: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days dummy expiration
  };
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(session));
      // Also set a dummy cookie so middleware/future server components can read it if needed
      document.cookie = `dcc_admin_token=${session.token}; path=/; max-age=${7 * 24 * 3600}; SameSite=Lax`;
    } catch {
      // ignore
    }
  }
  return session;
}

export function removeSession(): void {
  if (typeof window !== "undefined") {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
      document.cookie = "dcc_admin_token=; path=/; max-age=0; SameSite=Lax";
    } catch {
      // ignore
    }
  }
}

export function verifyDummyCredentials(email: string, pass: string): { valid: boolean; user?: AdminUser; error?: string } {
  const cleanEmail = email.trim().toLowerCase();
  const cleanPass = pass.trim();

  // Accept the official demo credentials or any @devpurcc.com with admin123
  if (cleanEmail === DEMO_CREDENTIALS.email.toLowerCase() && cleanPass === DEMO_CREDENTIALS.password) {
    return { valid: true, user: DEFAULT_ADMIN_USER };
  }

  if (cleanEmail.endsWith("@devpurcc.com") && cleanPass.length >= 6) {
    const namePart = cleanEmail.split("@")[0].replace(".", " ");
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    return {
      valid: true,
      user: {
        id: `dcc-user-${Date.now()}`,
        name: formattedName,
        email: cleanEmail,
        role: "Club Committee Member",
        department: "Devpur Cricket Club",
        lastLogin: "Active Now",
      },
    };
  }

  return {
    valid: false,
    error: "Invalid email or password. Use demo credentials: admin@devpurcc.com / admin123",
  };
}
