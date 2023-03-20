import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import styled from 'styled-components';
import samImg from "public/SamMcKay.jpg";

const Hero = styled.div`
  height: 80vh;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  background: #202733;
  height: 100%;
  `

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
  margin-left: 15%;
  margin-bottom: 5%;
  border-color: #2b3547;
  width: 350px;
  height: 450px;
  text-align: left;
  background-image: url('public/SamMcKay.jpg');
`

const StyledText = styled.p`
  margin-left: 5%;
  font-size: 15px;
  max-width: 80%;

`

const StyledLink = styled.a`
	padding: 0rem 2rem;
	color: #fff;
	font-size: 20px;
`

const StyledImage = styled.img`
  height: 200px;
  width: 250px;
  margin-bottom: 2%;
  margin-left: 15%;
  postion: top;
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
          <Heading2>About Us</Heading2>
          <StyledButton><StyledImage src={samImg} alt='A photo of Sam McKay at Meow Wolf'/><br/>
            <StyledText>Hello my name is Sam</StyledText>
          </StyledButton>

          <StyledButton><StyledImage src='/Images/About_images/SamMcKay.jpg'/><br/>
            <StyledText>Hello my name is Sam</StyledText>
          </StyledButton>

          <StyledButton><StyledImage src='pages/Images/About_images/SamMcKay.jpg'/><br/>
            <StyledText>Hello my name is Sam</StyledText>
          </StyledButton>

          <StyledButton><StyledImage src='pages/Images/About_images/SamMcKay.jpg'/><br/>
            <StyledText>Hello my name is Sam</StyledText>
          </StyledButton>

          <br/>
        </main>
      </Hero>
    </>
  )
}
