import { type NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

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
        <div className="mx-2 my-4 p-4 text-center text-indigo-100 sm:text-left  sm:text-xl">
          <h2 className="my-2 text-xl underline sm:text-2xl">
            Please read the instructions before proceeding further:
          </h2>
          <ol className="select-gray-600 list-decimal space-y-4">
            <li>
              Above are the two buttons for viewing the previously submitted
              surveys and for submiting a new survey.
            </li>
            <li>
              While filling the survey you should make sure that:
              <ul className="mx-4 my-2 space-y-2 border-2 border-indigo-300 p-2 text-center md:ml-8">
                <li className="text-xl capitalize underline underline-offset-4">
                  Survey form validation rules
                </li>
                <li>You are not submitting the same patient survey twice.</li>
                <li>
                  You are not leaving any feild blank as all fields are
                  required.
                </li>
                <li>
                  You are not entering less than 15 characters for overall
                  comments.
                </li>
                <li>
                  You are not entering file number less than 4 digits as file
                  number.
                </li>
                <li>
                  You are not entering letters or special characters as file
                  number.
                </li>
                <li>
                  You are not entering number or special character inside the
                  patient name field.
                </li>
                <li>
                  You are not entering patient name as {"'admin'"} as it is
                  preserved.
                </li>
              </ul>
            </li>
            <li>
              You can click on the {"'Patient Satisfaction Survey'"} above at
              the top to come back to this page.
            </li>
          </ol>
        </div>
      </main>
    </>
  );
};

export default Home;
