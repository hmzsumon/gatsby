import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return (
    <pre>
      <h2>{data.site.siteMetadata.title}</h2>
      <h4>- {data.site.siteMetadata.author}</h4>
      <p>{data.site.siteMetadata.description}</p>
    </pre>
  )
}

export default ComponentName
