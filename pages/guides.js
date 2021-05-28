import React from 'react'
import Layout from '../components/Layout/Layout'
import styles from './guides.module.scss'
import { useFlags } from "@happykit/flags/client";
import ComingSoon from "../components/ComingSoon/ComingSoon";

export default function Guides() {
    return (
        <Layout>
            <div>
                {flags?.comingSoon && <ComingSoon />}
                {flags?.pageContent && <p>Hello World</p>}
            </div>
        </Layout>
    )
}