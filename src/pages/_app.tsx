import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Layout } from "~/components";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
