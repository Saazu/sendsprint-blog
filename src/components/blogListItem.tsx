import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogListItemProps = {
   title: string; 
   id: number; 
   body?: string;
};

export default async function BlogListItem(props: Readonly<BlogListItemProps>) {
  const { title, id } = props;
  return (
    <div key={id} className="mx-12 mb-8 border border-1 border-gray-200 rounded-md p-4">
      <Link href={`/blog/${id}`}>
        <Image
          width={400}
          height={400}
          src="https://picsum.photos/seed/picsum/400/"
          alt="Random"
        />
      
        <span className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 col-span-1 row-span-1 relative">
          {`${title}`}
        </span>
      </Link>
    </div>
  );
}

