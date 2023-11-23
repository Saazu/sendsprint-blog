"use client";

import Fuse from "fuse.js"
import { useState } from "react"
import BlogListItem from "./BlogListItem"
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
      (val < (PAGE_LIMIT - PAGE_CONSTANT)) ? val += PAGE_CONSTANT : val
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
      <input
        type="search"
        placeholder="Search"
        className="py-5"
        onChange={handleSearch}
      />
      <div className="flex flex-col jusitfy-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-16 mt-16">
          {data.slice(page, page + PAGE_CONSTANT).map(({ id, title }) => (
            <BlogListItem key={id} id={id} title={title}/>
          ))}
        </div>
        <div className="flex flex-row justify-center bottom-0">
          <PaginationContols 
            pageSize={PAGE_CONSTANT}
            handleNext={handleNext}
            handlePrevious={handlePrevious}
          />
        </div>    
      </div>
    </div>
  );
}