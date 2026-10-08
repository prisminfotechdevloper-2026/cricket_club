import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, Calendar, BookOpen, Share2, ChevronRight, Tag } from "lucide-react";
import { Container } from "@/components/common/Container";
import { BlogPost } from "@/lib/types/content";

interface BlogPostDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogPostDetail({ post, relatedPosts }: BlogPostDetailProps) {
  return (
    <article className="min-h-screen bg-stone-50 pb-20">
      {/* 1. Article Header Banner (Light Theme) */}
      <section className="bg-gradient-to-b from-stone-100 via-stone-50 to-white text-stone-900 pt-10 pb-16 border-b border-stone-200">
        <Container>
          {/* Breadcrumbs */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-stone-500 mb-6">
            <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <Link href="/blog" className="hover:text-stone-900 transition-colors">Cricket Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-400" />
            <span className="text-[#EA6E18] font-semibold">{post.categoryLabel}</span>
          </div>

          <div className="max-w-4xl">
            {/* Category and Read Details */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-4">
              <span className="px-3 py-1 rounded-full font-bold bg-[#EA6E18] text-white uppercase tracking-wider shadow-2xs">
                {post.categoryLabel}
              </span>
              <span className="flex items-center gap-1.5 text-stone-600">
                <Calendar className="w-3.5 h-3.5 text-[#EA6E18]" />
                {post.publishedAt}
              </span>
              <span className="text-stone-400">•</span>
              <span className="flex items-center gap-1.5 text-stone-600">
                <Clock className="w-3.5 h-3.5 text-[#EA6E18]" />
                {post.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Author Byline */}
            <div className="mt-8 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-stone-900 text-white flex items-center justify-center font-bold text-base shadow-sm">
                  {post.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-stone-900">{post.author.name}</div>
                  <div className="text-xs text-stone-500 font-mono">{post.author.role}</div>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-stone-700 hover:text-[#EA6E18] transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Stories</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Main Article Body & Cover Image */}
      <Container>
        <div className="max-w-4xl mx-auto -mt-8">
          {/* Hero Feature Photo */}
          <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-100 mb-10">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Excerpt Lead */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-[#EA6E18] border-stone-200 shadow-2xs mb-10">
            <p className="text-lg sm:text-xl font-medium text-stone-800 font-body italic leading-relaxed">
              "{post.excerpt}"
            </p>
          </div>

          {/* Core Content Paragraphs */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-2xs space-y-6 text-stone-700 text-base sm:text-lg font-body leading-relaxed">
            {post.content.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="first-letter:text-4xl first-letter:font-headline first-letter:font-black first-letter:text-stone-900 first-letter:mr-2">
                {paragraph}
              </p>
            ))}

            {/* Tactical Takeaways / Match Insights Card (Warm Light Theme) */}
            {post.keyTakeaways && post.keyTakeaways.length > 0 && (
              <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#FFF8F0] border border-[#EA6E18]/30 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#EA6E18]">
                  <BookOpen className="w-4 h-4" />
                  <span>Coach's Practice Advice</span>
                </div>
                <h3 className="font-headline text-xl font-bold text-stone-900">
                  Key Takeaways for Club Cricketers
                </h3>
                <ul className="space-y-3 pt-2">
                  {post.keyTakeaways.map((takeaway, idx) => (
                    <li key={takeaway} className="flex items-start gap-3 text-sm sm:text-base text-stone-800">
                      <span className="w-5 h-5 rounded-full bg-[#EA6E18] text-white flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tags Cloud */}
            <div className="pt-8 border-t border-stone-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase text-stone-400 flex items-center gap-1.5 mr-2">
                <Tag className="w-3.5 h-3.5" />
                Topics:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* 3. Related Articles Strip */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <div className="flex items-center justify-between mb-6 pb-2 border-b border-stone-200">
                <h3 className="font-headline text-2xl font-bold text-stone-900">
                  More From the Journal
                </h3>
                <Link href="/blog" className="text-xs font-mono font-bold text-[#EA6E18] hover:underline">
                  All Stories →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group bg-white p-5 rounded-2xl border border-stone-200 hover:shadow-md hover:border-stone-400 transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-stone-100">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="text-[11px] font-mono text-stone-400 mb-1">{related.categoryLabel}</div>
                      <h4 className="font-headline text-base font-bold text-stone-900 group-hover:text-[#EA6E18] transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </div>
                    <div className="mt-4 pt-3 border-t border-stone-100 text-xs font-bold text-[#EA6E18] flex items-center justify-between">
                      <span>Read Story</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </article>
  );
}
