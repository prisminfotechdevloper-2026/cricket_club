import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen, Flame, Newspaper, ChevronRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { getAllBlogPosts, getBlogPostsByCategory } from "@/lib/data/blogs";
import { BlogCategory } from "@/lib/types/content";

export const metadata: Metadata = {
  title: "Cricket Journal & Tactical Playbooks",
  description:
    "Official cricket editorial of Devpur Cricket Club. Detailed match breakdowns, death-over strategies, red-soil pitch guides, and 14 years of club brotherhood.",
};

const CATEGORIES: { slug: BlogCategory; label: string }[] = [
  { slug: "all", label: "All Stories" },
  { slug: "match-analysis", label: "Match Analysis" },
  { slug: "coaching-tactics", label: "Coaching & Tactics" },
  { slug: "squad-spotlight", label: "Squad Spotlight" },
  { slug: "club-heritage", label: "Club Heritage" },
  { slug: "tournament-diaries", label: "Tournament Diaries" },
];

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const currentCategory = (resolvedSearchParams.category || "all") as BlogCategory;
  const posts = getBlogPostsByCategory(currentCategory);
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = currentCategory === "all" ? posts.filter((p) => p.id !== featuredPost?.id) : posts;

  return (
    <div className="flex flex-col min-h-screen bg-stone-50">
      {/* 1. Header / Editorial Masthead (Light Theme) */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 pt-10 pb-12 sm:pt-14 sm:pb-16 border-b border-stone-200">
        <Container>
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-stone-500 mb-3">
              <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
              <span className="text-[#D45D0E] font-semibold">Cricket Blog</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E86016]/10 text-[#D45D0E] border border-[#E86016]/20 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>DCC Cricket Stories • Est. 2013</span>
            </div>

            <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-stone-900 leading-tight">
              Cricket Stories &amp; Match Reports
            </h1>

            <p className="mt-3 text-base sm:text-lg text-stone-600 font-body leading-relaxed">
              Read how our team plays, match highlights, practice tips from our coach, and 14 years of friendship representing Devpur Gaam.
            </p>
          </div>

          {/* Category Filter Navigation (Pure SSR URL-based filtering) */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => {
              const isActive = currentCategory === cat.slug;
              return (
                <Link
                  key={cat.slug}
                  href={cat.slug === "all" ? "/blog" : `/blog?category=${cat.slug}`}
                  scroll={false}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider shrink-0 transition-all duration-150 ${
                    isActive
                      ? "bg-gradient-to-r from-[#D45D0E] to-[#F0761E] text-white shadow-sm"
                      : "bg-white text-stone-700 hover:text-stone-950 hover:bg-stone-100 border border-stone-200 shadow-2xs"
                  }`}
                >
                  {cat.label}
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 2. Blog Feed Content */}
      <section className="py-12 sm:py-16">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-stone-200">
              <p className="text-lg font-headline font-bold text-stone-700">No articles found in this category</p>
              <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-[#D45D0E] underline">
                View all stories
              </Link>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Show Lead Feature Story if on 'all' view */}
              {currentCategory === "all" && featuredPost && (
                <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className="relative aspect-[16/10] lg:aspect-auto lg:col-span-7 min-h-[320px]">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#E86016] text-white uppercase tracking-wider shadow">
                          {featuredPost.categoryLabel}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-stone-900/80 backdrop-blur-xs text-white flex items-center gap-1">
                          <Flame className="w-3.5 h-3.5 text-amber-400" />
                          <span>Featured Masterclass</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-10 lg:col-span-5 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-xs font-mono text-stone-500">
                          <span>{featuredPost.publishedAt}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {featuredPost.readTime}
                          </span>
                        </div>

                        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-stone-900 leading-tight">
                          <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[#D45D0E] transition-colors">
                            {featuredPost.title}
                          </Link>
                        </h2>

                        <p className="text-stone-600 text-sm sm:text-base font-body leading-relaxed">
                          {featuredPost.excerpt}
                        </p>

                        {featuredPost.keyTakeaways && (
                          <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-700 space-y-1">
                            <span className="font-mono text-[#D45D0E] font-bold flex items-center gap-1">
                              <BookOpen className="w-3.5 h-3.5" /> Core Takeaway:
                            </span>
                            <p className="italic font-medium">"{featuredPost.keyTakeaways[0]}"</p>
                          </div>
                        )}
                      </div>

                      <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-xs">
                            {featuredPost.author.name.charAt(0)}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-stone-900 leading-none">{featuredPost.author.name}</p>
                            <p className="text-[11px] text-stone-500">{featuredPost.author.role}</p>
                          </div>
                        </div>

                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111A2E] text-white hover:bg-[#D45D0E] text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          <span>Read Full Story</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid of Remaining Stories */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg hover:border-stone-400 transition-[box-shadow,border-color] duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] w-full overflow-hidden bg-stone-100">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-stone-950/85 text-white backdrop-blur-xs shadow-sm">
                          {post.categoryLabel}
                        </span>
                      </Link>

                      {/* Content Area */}
                      <div className="p-5 sm:p-6 space-y-3">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400">
                          <span>{post.publishedAt}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>

                        <h3 className="font-headline text-lg sm:text-xl font-bold text-stone-900 group-hover:text-[#D45D0E] transition-colors leading-snug">
                          <Link href={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h3>

                        <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 font-body leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* Footer Info */}
                    <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                      <span className="font-medium text-stone-500">By {post.author.name}</span>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center font-bold text-[#D45D0E] group-hover:underline"
                      >
                        <span>Read</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
