import React from "react";
import { PostsList } from "../components/PostsList";
import { BASE_URL } from "@/utils/constant";


export async function getBlogInfo() {
  const blogPosts = await fetch(BASE_URL);
  const posts: { title: string; id: number; body: string }[] = await blogPosts
    .json();

  return posts.map(({ title, id, body }) => ({ title, id, body }));
}

export default async function Home() {
  const posts = await getBlogInfo();

  return (
    <div className="">
      <PostsList data={posts} />
    </div>
  );
}