import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const getData = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        data
      }
    }
  }
`

const ProjectData = () => {
  const {
    site: {
      siteMetadata: { title, data },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h3>{title}</h3>
      <p>{data}</p>
    </div>
  )
}

export default ProjectData
