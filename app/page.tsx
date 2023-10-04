import Head from "next/head";
import { Navbar } from './components/navbar';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Medium Clone</title>
        <link rel='icon' href="/favcon.ico" />
      </Head>
      <Navbar />
      <div className="bg-yellow-500">
        Hello World!
      </div>
    </div>
  )
}
