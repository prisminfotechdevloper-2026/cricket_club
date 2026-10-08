import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, BookOpen, Flame } from "lucide-react";
import { Container } from "../common/Container";
import { getAllBlogPosts } from "@/lib/data/blogs";

export function EditorialBlogSection() {
  const posts = getAllBlogPosts();
  const featuredPost = posts[0]; // Lead story
  const wirePosts = posts.slice(1, 3); // Right column trending
  const bottomPosts = posts.slice(3, 6); // Bottom tactical wire

  return (
    <section className="py-16 sm:py-24 bg-stone-50 border-t border-b border-stone-200/80">
      <Container>
        {/* Section Masthead Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EA6E18]/10 text-[#EA6E18] text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <span>DCC Cricket Blog • Stories</span>
            </div>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight">
              Match Reports &amp; Cricket Stories
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-600 max-w-2xl font-body">
              Read how our team plays, match highlights, practice tips from our coach, and 14 years of Devpur Gaam friendship.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 text-white hover:bg-[#EA6E18] font-semibold text-sm transition-[background-color,color] duration-200 group shrink-0 shadow-sm"
          >
            <span>View All Stories</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Asymmetrical Editorial Showcase (Lead Feature + Trending Wire) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Left Column: Lead Feature Magazine Cover Story (7 cols) */}
          <div className="lg:col-span-7">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="group block relative rounded-3xl overflow-hidden bg-stone-900 border border-stone-800 shadow-xl transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#EA6E18] text-white uppercase tracking-wider shadow-md">
                    {featuredPost.categoryLabel}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-300" />
                    <span>Top Story</span>
                  </span>
                </div>
              </div>

              {/* Cover Story Content */}
              <div className="p-6 sm:p-8 text-white space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-stone-400">
                  <span>{featuredPost.publishedAt}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featuredPost.readTime}
                  </span>
                  <span>•</span>
                  <span>By {featuredPost.author.name}</span>
                </div>

                <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white group-hover:text-[#F8C080] transition-colors leading-tight">
                  {featuredPost.title}
                </h3>

                <p className="text-stone-300 text-sm sm:text-base line-clamp-2 font-body">
                  {featuredPost.excerpt}
                </p>

                {/* Tactical highlight pill */}
                {featuredPost.keyTakeaways && (
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
                    <span className="font-mono text-[#F8C080] font-semibold flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5" />
                      Coach Tip:
                    </span>
                    <span className="italic line-clamp-1 max-w-[70%] text-stone-300">
                      "{featuredPost.keyTakeaways[0]}"
                    </span>
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Right Column: Trending Wire Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#EA6E18]" />
                Popular Stories
              </span>
              <span className="text-xs font-mono text-stone-400">Recent Updates</span>
            </div>

            {wirePosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-white border border-stone-200/90 shadow-sm hover:shadow-md hover:border-[#EA6E18]/40 transition-[box-shadow,border-color] duration-200"
              >
                <div className="relative w-full sm:w-36 h-36 shrink-0 rounded-xl overflow-hidden bg-stone-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 150px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-stone-900/80 backdrop-blur-xs text-white">
                    {post.categoryLabel}
                  </div>
                </div>

                <div className="flex flex-col justify-between py-1 flex-1">
                  <div>
                    <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400 mb-1">
                      <span>{post.publishedAt}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h4 className="font-headline text-base sm:text-lg font-bold text-stone-900 group-hover:text-[#EA6E18] transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 font-body">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center text-xs font-bold text-[#EA6E18] group-hover:underline">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Editorial Strip: 3 Curated Tactical Guides */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-stone-200">
          {bottomPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group p-5 rounded-2xl bg-white border border-stone-200/80 hover:border-stone-400 hover:shadow-md transition-[border-color,box-shadow] duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-stone-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#111A2E]/90 text-white backdrop-blur-xs">
                    {post.categoryLabel}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-mono text-stone-400 mb-2">
                  <span>{post.publishedAt}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h4 className="font-headline text-base font-bold text-stone-900 group-hover:text-[#EA6E18] transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h4>

                <p className="mt-2 text-xs text-stone-600 line-clamp-2 font-body">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-700 group-hover:text-[#EA6E18]">
                <span>Read Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
