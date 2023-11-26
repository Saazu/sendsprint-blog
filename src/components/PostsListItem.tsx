import React from "react";
import Link from "next/link";
import Image from "next/image";

type PostsListItemProps = {
   title: string; 
   id: number; 
};

export default async function PostsListItem(props: Readonly<PostsListItemProps>) {
  const { title, id } = props;
  return (
    <div className="mx-12 mb-8 border border-1 border-gray-200 rounded-md p-4">
      <Link href={`/blog/${id}`}>
        <Image
          width={400}
          height={400}
          src="https://picsum.photos/seed/picsum/400/"
          alt="Random"
        />
      
        <span role="heading" className="capitalize underline text-blue-600 hover:text-blue-800 visited:text-purple-600 col-span-1 row-span-1 relative">
          {`${title}`}
        </span>
      </Link>
    </div>
  );
}

