import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`

const SEO = ({title, description}) => {
    const { site } = useStaticQuery(query)
    const metaDescription = description || site.siteMetadata.description
    return (
        <Helmet 
            htmlAttributes={{ lang:"sv" }}
            title={`${title} | ${site.siteMetadata.title}`}
            meta={[{name: `description`, content: metaDescription}]}>
        </Helmet>
    )
}

export default SEO
