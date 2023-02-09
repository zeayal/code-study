import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";
import Alert from "../../components/alert";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("script loaded");
        }}
      />
      <h1>First Post</h1>
      <Alert type="success" >success</Alert>
      <Alert type="error">error</Alert>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2 className="mt-6">
        <a href="/">Back to home with a tag</a>
      </h2>
    </Layout>
  );
}
