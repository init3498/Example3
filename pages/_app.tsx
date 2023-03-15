import { AppProps } from "next/app";
import Layout from "../components/Layout";

import "../styles/globals.scss";

export default function MyApp({ Component, pageProps, router }: AppProps) {
  return (
      <Layout>
          <Component {...pageProps} key={router.route} />
      </Layout>
  );
}
