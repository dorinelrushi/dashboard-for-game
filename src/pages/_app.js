import "@/styles/globals.css";
import LeftHeader from "./components/LeftHeader";
import Head from "next/head";
import HeaderUser from "./components/HeaderUser";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Dashboard Game</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      <div className="flex ">
        <div className="leftHeadr1 flex-[1.2px]">
          <LeftHeader />
        </div>
        <div className="rightLeft flex-[5] bg-[red]">
          <div className="overlay">
            <HeaderUser />
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </div>
  );
}
