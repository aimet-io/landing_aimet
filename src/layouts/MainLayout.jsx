import Footer from "@/packages/components/@footer/Footer";
import Nav from "@/packages/components/@nav/Nav";
import Head from "next/head";

export default function MainLayout({ title, children, metaDescription }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={metaDescription ?? "Meta Description"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      {children}

      <Footer />
    </>
  );
}
