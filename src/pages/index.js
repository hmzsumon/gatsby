import React from "react"
import Layout from "../components/Layout"
import MetaData from "../examples/MetaData"
import style from "../components/index.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={style.container}>
        <MetaData />
      </div>
    </Layout>
  )
}
