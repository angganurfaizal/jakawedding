import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
