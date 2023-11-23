"use client";

import Fuse from "fuse.js";
import Link from "next/link";
import { useState } from "react";

type PaginatorProps = {
  data: { title: string; id: number; body: string }[];
};

export function Paginator({ data: pageData }: PaginatorProps) {
  const [data, setData] = useState(pageData);
  const [page, setPage] = useState(0);

  const PAGE_CONSTANT = 10;
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
      {
        <div>
          <div>
            {data.slice(page, page + PAGE_CONSTANT).map(({ id, title }) => (
              <div key={id}>
                <Link href={`/blog/${id}`}>
                  <span className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                    {`${title}`}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          <div>
            <button className="pr-9 py-9" onClick={handlePrevious}>
              Previous 10
            </button>
            <button onClick={handleNext}>Next 10</button>
          </div>
        </div>
      }
    </div>
  );
}