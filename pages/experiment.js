import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'

const Hero = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;`

  const Heading = styled.h1`
    color: #000;
    font-size: 6rem;
    font-weight: 900;`

export default function Experiment() {
    return (
      <>
        <Head>
            <title>Experiment</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Hero>
          <Heading>Experiment</Heading>
        </Hero>
      </>
    )
  }