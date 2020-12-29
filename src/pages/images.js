import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Image from "../examples/Image"

const images = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <section className="images">
        <article className="single-image">
          <h3>basic image</h3>

          <Image fileName="image-2.jpeg" style={{ width: "100%" }} alt="" />
        </article>
        <article className="single-image">
          <h3>fixed image</h3>
          <Image fileName="image-1.jpeg" style={{ width: "100%" }} alt="" />
        </article>
        <article className="single-image">
          <h3>fluid image</h3>
          <Image fileName="image-3.jpeg" style={{ width: "100%" }} alt="" />
        </article>
      </section>
    </Layout>
  )
}
export const data = graphql`
  query {
    fluid: allImageSharp {
      edges {
        node {
          id
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default images
