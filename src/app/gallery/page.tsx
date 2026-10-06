import type { Metadata } from "next";
import { GalleryDirectory } from "@/components/gallery/GalleryDirectory";
import { galleryAlbums } from "@/lib/data/gallery";

export const metadata: Metadata = {
  title: "Memories & Photo Gallery",
  description:
    "Explore the photography archives of Devpur Cricket Club. Match day highlights, trophy celebrations, turf net sessions, and team memories.",
};

export default function GalleryPage() {
  return <GalleryDirectory albums={galleryAlbums} />;
}
