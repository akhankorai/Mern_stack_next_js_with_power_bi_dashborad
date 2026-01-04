import Head from "next/head";
import Dashboard from "@/components/Dashborad";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Student Dashboard for Muhammad Anus Saleem" />
      </Head>

      <main>
        <Navbar />
        <Dashboard />
        <Footer />
      </main>
    </>
  );
}