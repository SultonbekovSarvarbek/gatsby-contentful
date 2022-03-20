import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Container from '../components/container'
class AboutIndex extends React.Component {
  render() {
    const [info] = get(this, 'props.data.allContentfulAbout.nodes')
    return (
      <Layout>
          <Container>
                <p class="about-title">tite: {info.text}</p>
                <p class="about-description">description: {info.description}</p>
                <p>createdAt: {info.createdAt}</p>
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
        }
      }
  }
`