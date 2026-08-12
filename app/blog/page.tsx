import React from "react";
import { sql } from "@/lib/db";
import { BlogClientPage } from "./blog-client";

export const dynamic = "force-dynamic";

export default async function BlogIndexPage() {
  let posts: any[] = [];
  try {
    const dbPosts = await sql`SELECT * FROM posts WHERE published_at IS NOT NULL ORDER BY published_at DESC;`;
    if (dbPosts && Array.isArray(dbPosts)) {
      posts = dbPosts;
    }
  } catch (e) {
    console.error("Failed to fetch blog posts from DB:", e);
  }

  return <BlogClientPage posts={posts} />;
}
