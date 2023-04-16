import React from 'react';
import { render } from 'react-dom';
import styles from '@/styles/game.module.css'
import styled from 'styled-components'



const Heading1 = styled.h1`
  color: #fff;
  font-size: 4em;
  font-weight: 900;
  margin-bottom: 2rem;`

const Heading2 = styled.h2`
  color: #fff;
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 2rem;
`

const HeroButton = styled.button`
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: .1em;
  background-color: rgba(0,0,0,0.0);
  border-radius: 100px;
  border: 3px solid #40F2FE;
  margin-right: 2em;
  margin-top: 1em;
  height: 60px;
  width: 200px;
  transition: all .3s;
  box-shadow: 0px 0px 20px rgba(202,152,254,0.5);

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 20px rgba(202,152,254,1);
  }
`

const StyledText = styled.p`
font-size: 14pt;
`

const StyledLink = styled.a`
	// padding: 0rem 2rem;
	color: #E6E1FC;
`

const DownloadLink = styled(StyledLink)`
margin: 2rem 0;
font-weight: 700;
font-size: 14pt;
transition: all .2s;

&:hover {
  color: #fff;
}`

const HeroCol = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

const DivLeft = styled(HeroCol)`
`

const DivRight = styled(HeroCol)`
align-items: center;
`

const ColWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

`

const PresThumb = styled.img`
border: 3px solid #40F2FE;
transition: all .2s;
box-shadow: 0px 0px 50px rgba(202,152,254,0.2);

&:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 20px rgba(202,152,254,1);
}


`


export default function Group2({ Component, pageProps }) {
	return (
		<main className={styles.main}>
      <ColWrapper>
        <DivLeft>
        <Heading1>African countries</Heading1>
        <Heading2>PDF Presentation</Heading2>
        <StyledText>For this exercise, please download the accompanying PDF for a presentation on African countries and spend at least 10 minutes reviewing each slide. Your goal is to memorize as many countries and their names as possible. After you have finished reviewing the presentation, please click the 'Next' button below to continue.</StyledText>
        <br/>
        <StyledLink href="/test"><HeroButton>Next</HeroButton></StyledLink>
        </DivLeft>
    
        <DivRight>
          <StyledLink href="./Scripts/Countries PowerPoint.pdf" target="_blank"><PresThumb src="./PresentationThumbnail.png" width="100%"/></StyledLink>
          <br />
          <DownloadLink href="./Countries PowerPoint.pdf" target="_blank">Download PDF</DownloadLink>
        </DivRight>
      </ColWrapper>
		</main>
  	)
}
