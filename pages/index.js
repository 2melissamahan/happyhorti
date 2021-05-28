import Head from "next/head";
import styles from "./index.module.scss";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <Head>
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Happy Horti!</h1>
        </main>

        <footer></footer>
      </div>
    </Layout>
  );
}
