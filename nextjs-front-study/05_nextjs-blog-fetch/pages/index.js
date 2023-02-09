import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { generatePostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

export default function Home({ staticTitle, allPostsData }) {
  console.log("Home static props", allPostsData);
  return (
    <Layout home>
      <Head>
        <title>{staticTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>努力做一个数字游民</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // const data = await new Promise(resolve => setTimeout(() => resolve("Hello 大理"), 10000));
  // console.log('data', data);
  const allPostsData = generatePostsData();
  console.log("allPostsData", allPostsData);
  return {
    props: {
      staticTitle: "测试",
      allPostsData,
    },
  };
}
