import Head from 'next/head';
import styled from 'styled-components';
import React, {useState, useEffect} from 'react';
import Dropdown from '@/components/Dropdown';
import styles from '@/styles/game.module.css'
import {e} from "../components/Dropdown";

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
`

const DivRight = styled(HeroCol)`
  align-items: center;
  flex-grow: 1;
`

const ColWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;

`

const StyledButton = styled.button`
  font-size: 15px;
  background-color: #202733;
  border-color: #fff;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 3%;
`

const StyledText = styled.p`
font-size: 14pt;
`

const StyledImage = styled.img`
  height: 300px;
  width: auto;
  margin-bottom: 1rem;
  postion: static;

`


const options = [
  { value: "Algeria", label: "Algeria" }, 
  { value: "Angola", label: "Angola"},
  { value: "Benin", label: "Benin"},
  { value: "Botswana", label: "Botswana"},
  { value: "Burkina Faso", label: "Burkina Faso"},
  { value: "Cape Verde", label: "Cape Verde"},
  { value: "Central African Republic", label: "Central African Republic"},
  { value: "Chad", label: "Chad"},
  { value: "Comoros", label: "Comoros"},
  { value: "Djibouti", label: "Djibouti"},
  { value: "Democratic Republic of the Congo", label: "Democratic Republic of the Congo"},
  { value: "Egypt", label: "Egypt"},
  { value: "Equatorial Guinea", label: "Equatorial Guinea"},
  { value: "Eritrea", label: "Eritrea"},
  { value: "Ivory Coast", label: "Ivory Coast"},
  { value: "Mali", label: "Mali"},
  { value: "Sao Tome and Principe", label: "Sao Tome and Principe"},
  { value: "I don't know", label: "I don't know"}
  
]

const countryOrder = ["Mali", "Chad", "Burkina Faso", "Eritrea", "Central African Republic", "Angola", "Benin", "Cape Verde", "Democratic Republic of Congo", "Botswana", "Ivory Coast", "Algeria", "Egypt", "Equatorial Guinea", "Comoros", "Sao Tome", "Djibouti"];

var userScore = [];
var userChoice = [];

let i = 0;
export default function Game() {
  const [timeOnPage, setTimeOnPage] = useState(0);

  var CountryImages = [
    "https://i.imgur.com/kb4q4Yx.png",
    "https://i.imgur.com/gFDdANR.png",
    "https://i.imgur.com/antwu0T.png",
    "https://i.imgur.com/UpQ4C6M.png",
    "https://i.imgur.com/gB8g5Pe.png",
    "https://i.imgur.com/ZGe8qpm.png",
    "https://i.imgur.com/xRQBZCF.png",
    "https://i.imgur.com/OeedMq1.png",
    "https://i.imgur.com/nPHeogp.png",
    "https://i.imgur.com/VSY7UGC.png",
    "https://i.imgur.com/rwbGZTF.png",
    "https://i.imgur.com/ciapi9a.png",
    "https://i.imgur.com/JGKu4l4.png",
    "https://i.imgur.com/AafZLgR.png",
    "https://i.imgur.com/9ma69QZ.png",
    "https://i.imgur.com/FoZ4ANh.png",
    "https://i.imgur.com/Fv9Oy8T.png"
  ]
  const [imageSrc, setImageSrc] = useState(CountryImages[0]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeOnPage(timeOnPage => timeOnPage + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);


  const handleClick = () => {
    i+=1;

    setImageSrc(CountryImages[i]);
    if (e == countryOrder[i]) {
      userScore.push(true);
      userChoice.push(e);
    } else {
      userScore.push(false);
      userChoice.push(e);
    }
    
    if (i == 17) {
      if (typeof window !== 'undefined') {
        const finalScore = userScore;
        const finalChoices = userChoice;
        window.localStorage.setItem("userTime", timeOnPage);
        window.localStorage.setItem("userScore", finalScore);
        window.localStorage.setItem("userChoices", finalChoices);
        window.location.href = "/results";
      }
    }
  };

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
          <Heading1>African countries</Heading1>
          <Heading2>Test your knowledge</Heading2>
          <StyledText>For this exercise, please do your best to match each country to its name using the dropdown below the image. If you are unsure, please select "I don't know" at the bottom of the dropdown list. After you have selected, submit your answer by pressing the 'submit answer' button. </StyledText>
          <br/>
          
          </DivLeft>
          <DivRight>
        
          <StyledImage src={imageSrc} alt="example"/>
        
        
            <Dropdown className={styles.Dropdown} isSearchable placeHolder="What country is this?" options={options}/>
      
            <HeroButton onClick={handleClick}>Submit Answer</HeroButton>
          
        
          </DivRight>
        </ColWrapper>
      </main>
    </>

);
}
