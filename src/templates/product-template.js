import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"

const ComponentName = ({
  data: {
    product: {
      price,
      title,
      image: { fixed },
      info: { info },
    },
  },
}) => {
  return (
    <Layout>
      <div className="single-product-wrapper">
        <div style={{ textAlign: "center" }}>
          <Link to="/products">back to products</Link>
          <h3>single product: {title} </h3>
        </div>
        <section className="single-product">
          <article>
            <Image fixed={fixed} alt={title} />
          </article>
          <article>
            <h2>{title}</h2>
            <h4>{price}</h4>
            <p>{info}</p>
            <button>add to cart</button>
          </article>
        </section>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query GetSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
      info {
        info
      }
    }
  }
`

export default ComponentName
