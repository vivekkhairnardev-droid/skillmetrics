import React from "react";
import { getBlogPosts } from "@/lib/sanity/client";
import { BlogClientPage } from "./blog-client";

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();
  return <BlogClientPage posts={posts} />;
}
