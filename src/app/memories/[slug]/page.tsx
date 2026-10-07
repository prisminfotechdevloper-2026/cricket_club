import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { galleryAlbums } from "@/lib/data/gallery";
import { GalleryAlbumDetail } from "@/components/gallery/GalleryAlbumDetail";

interface MemoriesDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: MemoriesDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const album = galleryAlbums.find((a) => a.slug === slug);

  if (!album) {
    return {
      title: "Album Not Found",
    };
  }

  return {
    title: `${album.title} — Memories & Moments`,
    description: `High-resolution match and training photography album: ${album.title} at Devpur Cricket Club.`,
  };
}

export default async function MemoriesDetailPage({
  params,
}: MemoriesDetailPageProps) {
  const { slug } = await params;
  const album = galleryAlbums.find((a) => a.slug === slug);

  if (!album) {
    notFound();
  }

  return <GalleryAlbumDetail album={album} />;
}
