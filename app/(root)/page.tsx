import StartupCard from "@/components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({ searchParams }: {searchParams: Promise<{query?: string}>}) {
  const {query} = (await searchParams);
  const posts = [{
    _createdAt: new Date(),
    views: 50,
    _id: 1,
    author: {_id: 1, name: 'Elon Musk'},
    image: 'https://images.unsplash.com/photo-1755327814789-1c299169187c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'robots',
    description: 'We Robot',
    title: 'We Robot'
  }];

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
