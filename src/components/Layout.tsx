import Link from "next/link";

const Layout = () => {
  return (
    <div className="flex flex-col items-center justify-around bg-gray-700 py-2 sm:flex-row">
      <h1 className="text-center text-xl font-bold text-indigo-200 md:text-left md:text-3xl">
        <Link href={"/"}>Patient Satisfaction Survey</Link>
      </h1>
      <div className="my-2 space-x-8 sm:my-auto">
        <Link href={"/new-survey"} className="btn">
          Add Survey
        </Link>
        <Link href={"/survey-list"} className="btn">
          View Survey
        </Link>
      </div>
    </div>
  );
};
export default Layout;
