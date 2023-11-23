import React from "react";
import Link from "next/link";

type BlogListItemProps = {
   title: string; 
   id: number; 
   body?: string;
};

export default async function BlogListItem(props: Readonly<BlogListItemProps>) {
  const { title, id } = props
  return (
    <div>
      <Link href={`/blog/${id}`}>
        <span className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
          {`${title}`}
        </span>
      </Link>
    </div>
  );
}