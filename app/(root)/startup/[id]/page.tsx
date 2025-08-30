import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

export const experimental_ppr = true;

const page = async ({ params }: {params: Promise<{id: string}>}) => {
  const id = (await params).id;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, {id});

  if (!post) notFound();

  // console.log(post);

  return (
    <>
        <section className="pink-container !min-h-[350px]">
          <p className="tag">{formatDate(post.createdAt)}</p>
          <h2 className="heading !max-w-4xl">{post.title}</h2>
          <p className="sub-heading">{post.description}</p>
        </section>
        <section className="!max-w-4xl mt-8 mx-auto">
          <img src={post.image} alt="startup logo" className="w-full h-auto rounded-2xl"/>
        </section>
    </>
  )
}

export default page