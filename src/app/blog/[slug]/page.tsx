import { PostComment } from "../../../components/Comments";
import { BASE_URL, COMMENT_URL } from "@/utils/constant";

type TBlog = {
  userId: number;
  id: string;
  title: string;
  body: string;
};

export type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

async function getBlogContent(postId: string) {
  const res = await fetch(`${BASE_URL}/${postId}`);

  return res.json();
}

async function getComments(postId: string) {
  const res = await fetch(`${COMMENT_URL}${postId}`);

  return res.json();
}

export async function generateStaticParams() {
  const data = await fetch(BASE_URL);
  const posts: TBlog[] = await data.json();

  return posts.map((p) => ({
    slug: p.id.toString(),
  }));
}

export default async function Page(
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
  const { userId, id, title, body }: TBlog = await getBlogContent(slug);
  const comments: TComment[] = await getComments(slug);

  return (
    <div className="group flex flex-col items-center text-dark dark:text-light px-8">
      <h1 className="font-bold pt-8 uppercase text-lg">{title}</h1>
      <div className="flex justify-center">
        
        <p className="pt-9 w-full md:w-1/3">
          {body}
        </p>
      </div>
      <div className="mt-8 w-full md-w-1/3 flex justify-center">
        <PostComment comments={comments} />
      </div>
    </div>
  );
}