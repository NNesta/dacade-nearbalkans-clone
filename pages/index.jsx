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
      <Herosection />
      <LearningSection/>
      <CompleteCourse/>
      <ClaimCertificate/>
      <BottomSection/>
    </div>
    </>
  )
}