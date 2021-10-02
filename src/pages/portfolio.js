import loadable from '@loadable/component'
import { withPrefix } from 'gatsby'
import React from 'react'
import { Col, Container, Row } from 'react-awesome-styled-grid'
import styled, { css } from 'styled-components'
import siteConfig from '../../data/siteConfig'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'

const Layout = loadable(() => import('../components/layout'))

const Image = styled.img`
  max-height: 220px;
  max-width: 220px;
  object-fit: cover;
  object-position: center center;
  border-radius: 10px;
  box-shadow: 24px 47px 79px -21px rgba(0, 0, 0, 0.51);
`

const JobCard = styled.a`
  text-decoration: none;
  color: inherit;

  ${({ href }) =>
    href &&
    css`
      &:hover ${Image} {
        transition: transform 0.5s;
        transform: translateY(-5px);
      }
    `}
`

const Portfolio = ({ className, location }) => {
  const title = 'Portfolio'
  const { keywords, portfolio } = siteConfig
  return (
    <Layout location={location}>
      <SEO title={title} keywords={keywords} />

      <Hero heroImg={withPrefix('/images/woman.jpg')} title={title} />

      <Wrapper className={className}>
        <Container className="page-content" fluid>
          <Row>
            <Col>
              <h4
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginBottom: '2em',
                }}
              >
                <span
                  style={{
                    color: 'black',
                    background: 'yellow',
                    padding: '3px',
                    borderRadius: '5px',
                    border: '1px solid black',
                  }}
                >
                  FYI
                </span>
                &nbsp; The Heavy Duty (Impressive) Work is in Production
              </h4>
            </Col>
          </Row>
          <Row>
            {portfolio.map(job => (
              <Col key={job.description} align="center">
                <JobCard
                  as={job.url ? 'a' : 'div'}
                  href={job.url}
                  target="_blank"
                  style={{
                    paddingBottom: '1.5em',
                  }}
                >
                  <Image
                    style={{ minHeight: '300px' }}
                    src={withPrefix(job.image)}
                  />
                  <p
                    style={{
                      maxWidth: '190px',
                      wordBreak: 'break-word',
                      textAlign: 'center',
                      hyphens: 'none',
                    }}
                  >
                    {job.description}
                  </p>
                </JobCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Portfolio)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
  }
`
