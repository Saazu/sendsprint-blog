"use client";

import * as React from "react";
import type { Comment } from "./page";

export function PostComment(
  { comments: postComments }: { comments: Comment[] },
) {
  const [comments, setComments] = React.useState(postComments);
  const [value, setValue] = React.useState("");

  const handleChange = (ev: React.FormEvent<HTMLTextAreaElement>) => {
    setValue(ev.currentTarget.value);
  };

  const handleSubmit = async (ev: React.FormEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    try {
      const dataIn = {
        body: value,
        postId: comments[0].postId,
        email: "example@example.com",
        name: "user",
        id: comments.length + 1,
      };

      await postComment(dataIn);
      setComments((prev) => [...prev, dataIn as Comment]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="mt-9 bg-slate-400">
        {comments.map(({ postId, id, name, email, body }) => (
          <div key={id}>
            <small>
              <div>{email}</div>
              <div>{name}</div>
              <pre>{body}</pre>
            </small>
            <hr />
          </div>
        ))}
      </div>
      <div className="py-[40px]">
        <textarea value={value} onChange={handleChange} className="outline" />
        <div>
          <button onClick={handleSubmit}>Submit Comment</button>
        </div>
      </div>
    </div>
  );
}

async function postComment(
  { body, postId, id, email }: Comment,
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