import Head from "next/head";
import { Navbar } from './components/navbar';
import { Hero } from "./components/hero";
import { Trending } from "./components/trending";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Medium Clone</title>
        <link rel='icon' href="/favcon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Trending />
    </div>
  )
}
