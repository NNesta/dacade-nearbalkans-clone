import Head from "next/head"
import Herosection from "../components/Herosection";
import LearningSection from "../components/LearningSection";
import CompleteCourse from "../components/CompleteCourse";
import ClaimCertificate from "../components/ClaimCertificate";
import BottomSection from "../components/BottomSection";

export default function Home() {
  return (
    <>
    <Head>
   <title>NEAR dev 101</title>
  <meta name="description" content="NEAR dev 101 clone Created By Ngabonziza Nestor" />
        <link rel="icon" href="/assets/logo-1.png" />
    </Head>
    <div className="">
    <div className="container mx-auto w-full h-full">
      <h1 className="text-6xl h-screen my-auto w-full text-black py-96 px-72">About page page</h1>
    </div></div>
    </>
  )
}