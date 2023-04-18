import Head from 'next/head';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import Dropdown from '@/components/Dropdown';
import styles from '@/styles/welcome.module.css'
import {e} from "../components/Dropdown";

const Heading1 = styled.h1`
  font-size: 3em;
  font-weight: 900;
  margin-bottom: 2rem;`

const Heading2 = styled.h2`

  font-size: 1.8em;
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
  color: #21295c;
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

const StyledLink = styled.a`
	color: #E6E1FC;
`

const HeroCol = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 50%;
  position: relative;

`

const DivLeft = styled(HeroCol)`
	align-items: center;
  flex-grow: 1;
`

const DivRight = styled(HeroCol)`
  align-items: center;
  flex-grow: 1;
  text-align: center;
`

const ColWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`


const StyledText = styled.p`
font-size: 14pt;
line-height: 1.8rem;
`

  
export default function Welcome() {
  return (
    <>
      <Head>
          <title>GeoPursuit | Video Games as an Educational Medium</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <ColWrapper>
          <DivLeft>
          <Heading1>Welcome to the Interactive Learning Modalities Experiment</Heading1>
          <Heading2>A Human-Computer Interaction Study by students at Colorado State University</Heading2>
          <StyledText>
		  Welcome to the Interactive Learning Modalities Experiment, a human-computer interaction study conducted by students at Colorado State University. We appreciate your participation and interest in this study, which aims to explore the effectiveness of digital interaction methodologies in comparison to traditional learning methods, such as presentations.
		  </StyledText>
		  <br />
		  <StyledText>

Before you begin, we would like to provide some information about the experiment and your participation.
</StyledText>
		  <br />
		  <StyledText>
	<strong>Experiment Overview: </strong>
You have been assigned a group number, either Group 1 or Group 2. Each group will experience a different learning modality. The details of the modalities will be provided once you have been assigned to a group. Please note that the purpose of this experiment is to compare the effectiveness of the different modalities, so we ask that you not discuss your experiences with others during the study.
</StyledText>
		  <br />
		  <StyledText>
<strong>Data Collection and Privacy: </strong>
During the course of this experiment, we will be collecting information about your learning progress and experience. This will include test results, time taken to complete tasks, and other potential information. Rest assured, we are committed to maintaining the privacy of our participants. All data collected will be anonymized and securely stored. No personally identifiable information will be shared with third parties.
</StyledText>
		  <br />
		  <StyledText>
<strong>Ethical Standards: </strong>
This study aims to be a fair and ethical experiment. If at any point during the study you feel uncomfortable or wish to discontinue your participation, you have the right to do so without any consequences.
</StyledText>
		  <br />
		  <StyledText>
<strong>Consent: </strong>
By clicking one of the two buttons below, you acknowledge that you have read and understood the information provided above, and you voluntarily agree to participate in this study. Your participation will contribute to the advancement of knowledge in the field of human-computer interaction and education.


		  </StyledText>
		  <br />
		  <StyledText><strong>Which group are you in?</strong></StyledText>

          <br/>
		  <ColWrapper>
		  <StyledLink href="/game"><HeroButton>Group 1</HeroButton></StyledLink>
		  <StyledLink href="/group2"><HeroButton>Group 2</HeroButton></StyledLink>
		  </ColWrapper>
		  
          
          </DivLeft>
        </ColWrapper>
      </main>
    </>

);
}