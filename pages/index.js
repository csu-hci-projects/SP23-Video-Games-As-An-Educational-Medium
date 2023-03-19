import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'

const Hero = styled.div`
  height: 80vh;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  background: #202733;`

  const Heading = styled.h1`
    color: #fff;
    font-size: 6rem;
    font-weight: 900;`

  const Heading2 = styled.h2`
    color: #fff;
    font-size: 40px;
    font-weight: 500;
    margin-left: 3%;
    margin-top: 2%;
    margin-bottom: 2%;
    display: block;
  `

const StyledButton = styled.button`
  font-size: 15px;
  font-weight: 20px;
  background-color: #2b3547;
  border-radius: 5px;
  margin-left: 4%;
  margin-top: 1%;
  border-color: #2b3547;
  width: 12%;
  height: 60px;
  display: inline;
`

const StyledText = styled.p`
  margin-left: 3%;
  font-size: 20px;
  max-width: 80%;

`

const StyledLink = styled.a`
	padding: 0rem 2rem;
	color: #fff;
	font-size: 20px;
`

export default function Home() {
  return (
    <>
      <Head>
          <title>GeoPursuit | Video Games as an Educational Medium</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <main>
          <Heading2>What group are you in?</Heading2>
          <StyledButton><StyledLink href="/group1">Group 1</StyledLink></StyledButton>
          <StyledButton><StyledLink href="/group2">Group 2</StyledLink></StyledButton>
          <StyledButton><StyledLink href="/group3">Group 3</StyledLink></StyledButton>
          <Heading2>Introduction:</Heading2>
          <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis laoreet arcu. Cras felis eros, malesuada
            in porta eget, volutpat et metus. Suspendisse molestie purus quis velit facilisis vulputate. Vivamus dapibus, ex a facilisis
            euismod, nunc dui malesuada dolor, a facilisis tellus erat ut justo. Fusce finibus ultrices arcu. In sed leo magna. Sed eu magna
            nec ante imperdiet bibendum sed sed lorem.
          </StyledText>
          <br/>
          <StyledText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sem nisl, aliquet id scelerisque vitae, 
            dapibus in sem. Mauris bibendum faucibus sem eu tempor. Praesent vulputate est eu quam elementum, ut laoreet elit 
            mollis. Duis varius fermentum nibh eu facilisis. Mauris pharetra pulvinar convallis. Quisque consectetur lacus vitae
            nisi vulputate vulputate. Integer lacus augue, commodo et enim ac, volutpat hendrerit enim. Vivamus bibendum efficitur consequat. 
          </StyledText>
          <br/>
          <StyledText>
          Duis laoreet dui sed libero tincidunt, eu porttitor felis faucibus. Aenean maximus quam non elementum pharetra. Sed bibendum condimentum
          purus nec elementum. Mauris congue odio et consectetur tincidunt. Aliquam iaculis eget velit sit amet blandit. Vestibulum fringilla nibh
          augue, sit amet laoreet elit blandit ac. Aenean mauris sem, aliquet viverra facilisis id, ullamcorper eu erat.
          </StyledText>
          <br/>
        </main>
      </Hero>
    </>
  )
}
