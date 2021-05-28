import React from "react";
import Layout from "../components/Layout/Layout";
import styles from "./about.module.scss";
import { useFlags } from "@happykit/flags/client";
import ComingSoon from "../components/ComingSoon/ComingSoon";

export default function Shop() {
  const { flags } = useFlags();

  return (
    <Layout>
      <div>
        {flags?.pageContent && <ComingSoon />}
        {flags?.comingSoon && <p>Hello World</p>}
      </div>
    </Layout>
  );
}
