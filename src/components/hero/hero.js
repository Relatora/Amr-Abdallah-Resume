import React from 'react'
import { withPrefix } from 'gatsby'
import siteConfig from '../../../data/siteConfig'
import styled from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  display: table;
  width: 100%;
  overflow: hidden;
`

const TitleContainer = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 100%;
`

const HeroTitle = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  margin: 10px 60px;
  color: #fff;
  text-shadow: 0px 20px 10px rgb(34 34 34);
`

const Hero = ({ className, title }) => (
  <HeroContainer className={className}>
    <TitleContainer>
      <HeroTitle>{title}</HeroTitle>
    </TitleContainer>
  </HeroContainer>
)

export default styled(Hero)`
  ${p => `background-image: url(${p.heroImg || withPrefix(siteConfig.siteCover)});`}
  height: 70vh;
  background-attachment: fixed;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`
