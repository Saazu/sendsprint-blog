"use client";

import * as React from "react";
import type { TComment } from "../app/blog/[slug]/page";
import CommentListItem from "./CommentListItem";

export function PostComment(
  { comments: postComments }: { comments: TComment[] },
) {
  const [comments, setComments] = React.useState(postComments);
  const [newComment, setNewComment] = React.useState("");

  const handleChange = (ev: React.FormEvent<HTMLTextAreaElement>) => {
    setNewComment(ev.currentTarget.value);
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    try {
      const dataIn = {
        body: newComment,
        postId: comments[0].postId,
        email: "example@example.com",
        name: "user",
        id: comments.length + 1,
      };

      await postComment(dataIn);
      setComments((prev) => [...prev, dataIn as TComment]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full md:w-1/3">
      <h2 className="text-center text-semibold underline">Comments</h2>
      <div className="mt-4 bg-slate-100">
        {comments.map(({ id, name, email, body }) => (
          <div key={id} className="px-4 py-4">
            <CommentListItem 
              name={name} 
              email={email} 
              body={body}/>
          </div>
        ))}
      </div>
      <div className="py-[40px]">
        <textarea 
          value={newComment} 
          onChange={handleChange} 
          className="outline rounded-sm w-full p-2"
          rows={8}
        />
        <div>
          <button
            className="border border-1 border-black rounded-sm px-4 py-2 text-sm"
            onClick={handleSubmit}
            disabled={newComment.trim() === ""}
          >
            Submit Comment
          </button>
        </div>
      </div>
    </div>
  );
}

async function postComment(
  { body, postId, id, email }: TComment,
) {
  try {
    if (body) {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "PUT",
          body: JSON.stringify({ body, postId, id, email }),
        },
      );

      return res.json();
    }
  } catch (error) {
    console.error(error);
  }
  return {};
}