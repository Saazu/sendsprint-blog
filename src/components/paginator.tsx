"use client";

import Fuse from "fuse.js"
import { useState } from "react"
import BlogListItem from "./BlogListItem"
import Link from "next/link";
import PaginationContols from "./PaginationControls";

type PaginatorProps = {
  data: { title: string; id: number; body: string }[];
};

export function Paginator({ data: pageData }: Readonly<PaginatorProps>) {
  const [data, setData] = useState(pageData);
  const [page, setPage] = useState(0);

  const PAGE_CONSTANT = 8;
  const PAGE_LIMIT = data.length;

  const fuse = new Fuse(data, {
    keys: ["title", "body"],
  });

  const handleNext = () => {
    setPage((val) =>
      (val < (PAGE_LIMIT - PAGE_CONSTANT)) ? val + PAGE_CONSTANT : val
    );
  };

  const handlePrevious = () => {
    setPage((val) => val >= PAGE_CONSTANT ? val - PAGE_CONSTANT : val);
  };

  const handleSearch = (ev: React.FormEvent<HTMLInputElement>) => {
    const result = fuse.search(ev.currentTarget.value);
    setData(
      result.length
        ? result.map(({ item: { title, id, body } }) => ({ title, id, body }))
        : pageData,
    );
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:flex md:justify-end md:w-full py-8 px-16">
        <input
          type="search"
          placeholder="Search"
          onChange={handleSearch}
          className="border border-1 border-gray-200 rounded-md px-4 py-2 mr-4"
        />
        <div className="flex flex-row justify-center bottom-0 mt-2 md:mt-0">
          <PaginationContols 
            pageSize={PAGE_CONSTANT}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        </div> 
      </div>
      
      <div className="flex flex-col jusitfy-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-16 mt-16">
          {data.slice(page, page + PAGE_CONSTANT).map(({ id, title }) => (
             <div key={id} className="mx-12 mb-8 border border-1 border-gray-200 rounded-md p-4">
              <Link href={`/blog/${id}`}>
                <span className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 col-span-1 row-span-1 relative">
                  {`${title}`}
                </span>
              </Link>
           </div>
          ))}
        </div>
           
      </div>
    </div>
  );
}