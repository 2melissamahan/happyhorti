import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "./about.module.scss";
import { useFlags } from "@happykit/flags/client";

export default function Shop() {
  const { flags } = useFlags();

  return (
    <Layout>
      <div>
        {flags?.comingSoon && <p>Coming soon!</p>}
        {flags?.pageContent && <p>Hello World</p>}
      </div>
    </Layout>
  );
}
