import Cards from "./components/card";

export default function Home() {
  return (
    <>
      <div className="Contents">
        <div className="Topic px-36 pt-8 text-4xl font-semibold">
          <h1>Contents</h1>
        </div>
        <div className="cards flex flex-wrap justify-center px-28">
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </>
  );
}


// postgresql://postgres.ygkwxqmwnhvxplhidwxa://supabase1%;@aws-0-ap-south-1.pooler.supabase.com:6543/postgres