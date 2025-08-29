import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";
import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY } from "@/sanity/lib/queries";

export default async function Home({ searchParams }: {searchParams: Promise<{query?: string}>}) {
  const {query} = (await searchParams);
  const posts = await client.fetch(STARTUP_QUERY);
  
  // console.log(posts);

  return (
    <>
      <section className="pink-container">
        <h1 className="heading">Pitch Your Startup, <br />Connect with Entrepreneurs</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for: "${query}"` : 'All startups'}
        </p>
        <ul className="mt-7 card-grid">
          {
            posts.length > 0 ? posts.map((post: StartupTypeCard) => {
              return <StartupCard key={post._id} post={post} />
            }) :
            <p className="no-result">No Result</p>
          }
        </ul>
      </section>
    </>
  );
}
