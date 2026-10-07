import type { Metadata } from "next";
import { MemoriesDirectory } from "@/components/memories/MemoriesDirectory";
import { galleryAlbums } from "@/lib/data/gallery";

export const metadata: Metadata = {
  title: "Memories & Photo Archives | Devpur Cricket Club",
  description:
    "Explore the photography and memories archives of Devpur Cricket Club. Match day highlights, trophy celebrations, turf net sessions, and community moments since 2013.",
};

export default function MemoriesPage() {
  return <MemoriesDirectory albums={galleryAlbums} />;
}
