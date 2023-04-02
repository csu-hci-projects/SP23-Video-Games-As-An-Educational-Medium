import Head from 'next/head'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Hero = styled.div`
  height: 80vh;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 2rem;
  z-index: 100;
  `

const Heading = styled.h1`
  color: #fff;
  font-size: 4rem;
  font-weight: 900;
  margin-left: 2%;
  margin-bottom: 3%;`

const Text = styled.h3`
  color: #fff;
  font-weight: 500;
  margin-top: 4%;
  margin-left: 10%;
  font-size: 2rem;
`


export default function Results() {
  const [TestTime, setTestTime] = useState('');
  const [score, setScore] = useState('');

  
  useEffect(() => {
    const time = window.localStorage.getItem('userTime');
    const score = window.localStorage.getItem('userScore');
    const count = score.split('true').length-1;
    const result = count / 17;

    setTestTime(time);
    setScore((result*100).toFixed(2));
  }, []);

    return (
      <>
        <Head> 
            <title>Results</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
          <Heading>Results</Heading>
          <Text>Participant Completion Time: {TestTime} Seconds</Text>
          <Text>Percentage Correct: {score}%</Text>
          <Text>Countries:</Text>

      </>
    )
  }