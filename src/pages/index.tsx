import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { SurveyForm } from "~/components";

// import { api } from "~/utils/api";

const Home: NextPage = () => {
  // const { data } = api.patientSurvey.getAll.useQuery();

  // console.log(data);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Head>
        <title>Patient Satisfaction Survey</title>
        <meta
          name="description"
          content="Patient satisfaction survey app created by Qurashi Akeel"
        />
        <meta name="author" content="Qurashi Akeel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-stone-900 to-indigo-950">
        {isMounted && <Toaster />}
        <SurveyForm />
      </main>
    </>
  );
};

export default Home;
