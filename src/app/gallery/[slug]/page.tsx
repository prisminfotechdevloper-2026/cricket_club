import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { galleryAlbums } from "@/lib/data/gallery";
import { GalleryAlbumDetail } from "@/components/gallery/GalleryAlbumDetail";

interface GalleryDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: GalleryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = galleryAlbums.find((a) => a.slug === slug);

  if (!album) {
    return {
      title: "Album Not Found",
    };
  }

  return {
    title: `${album.title} — Photo Gallery`,
    description: `High-resolution match and training photography album: ${album.title} at Devpur Cricket Club.`,
  };
}

export default async function GalleryDetailPage({
  params,
}: GalleryDetailPageProps) {
  const { slug } = await params;
  const album = galleryAlbums.find((a) => a.slug === slug);

  if (!album) {
    notFound();
  }

  return <GalleryAlbumDetail album={album} />;
}
