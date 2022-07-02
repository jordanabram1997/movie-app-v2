import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import requests from '../utils/requests';


export default function Home({ results }) {
  console.log(results);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}

        <Header />
      {/* Navbar */}

        <Navbar />
      {/* Results */}
        <Results results={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre || "fetchTrending";
  const request = await fetch(`
  https://api.themoviedb.org/3${requests[genre].url}
  `).then((response) => response.json());

  return {
    props: {
      results: request.results,
    },
  };
}