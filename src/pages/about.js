import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Container from '../components/container'
class AboutIndex extends React.Component {
  render() {
    const [info] = get(this, 'props.data.allContentfulAbout.nodes')
    return (
      <Layout>
          <Container>
                <p>tite: {info.text}</p>
                <p>description: {info.description}</p>
                <p>createdAt: {info.createdAt}</p>

                <GatsbyImage alt={info.aboutImage.file.title} image={info.aboutImage.file.url} />
          </Container>
      </Layout>
    )
  }
}

export default AboutIndex
export const pageQuery = graphql`
query AboutQuery {
    allContentfulAbout {
        nodes {
          text
          description
          createdAt
          aboutImage {
            file {
              url
              fileName
              title
              contentType
            }
          }
        }
      }
  }
`