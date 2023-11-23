import React from "react";
import { Paginator } from "../components/paginator";
import { BASE_URL } from "@/utils/constant";


export async function getBlogInfo() {
  const data = await fetch(BASE_URL);
  const posts: { title: string; id: number; body: string }[] = await data
    .json();

  return posts.map(({ title, id, body }) => ({ title, id, body }));
}

export default async function Home() {
  const data = await getBlogInfo();

  return (
    <div className="p-8 h-full w-full">
      <Paginator data={data} />
    </div>
  );
}