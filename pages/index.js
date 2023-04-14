import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import styled from 'styled-components'


const Hero = styled.div`
  height: 80vh;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 2rem;
  z-index: 100;
  background: url('./herobg.jpeg') no-repeat center center;
  background-size: cover;
  `

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
`

const StyledLink = styled.a`
	padding: 0rem 2rem;
	color: #E6E1FC;
`

const HeroCol = styled.div`
  padding: 1rem;
`

const DivLeft = styled(HeroCol)`
`

const DivRight = styled(HeroCol)`
  
`

const ColWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

`


export default function Home() {
  return (
    <>
      <Head>
          <title>GeoPursuit | Interactive Modalities for Learning</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero>
        <header>
          <DivLeft className={styles.cols}>
            <Heading1>Interactive modalities for learning.</Heading1>
            <Heading2>What group are you in?</Heading2>
            <ColWrapper className={styles.colWrapper}>
            <StyledLink href="/group1"><HeroButton>Group 1</HeroButton></StyledLink>
            <StyledLink href="/group2"><HeroButton>Group 2</HeroButton></StyledLink>
            </ColWrapper>
          </DivLeft>
        </header>
      </Hero>
          <main className={styles.main}>
            <ColWrapper className={styles.colWrapper}>
              <DivLeft className={styles.cols}>
                <div style={{width: 500, height: 200}}>
                  <img src="https://www.northeastern.edu/graduate/blog/wp-content/uploads/2020/06/Human-Computer-Interaction-HERO.jpg" width="100%"/>
                </div>
              </DivLeft>
              <DivRight className={styles.cols}>
                <Heading2>Introduction</Heading2>
                <StyledText>Education is a broad general term that encompasses many techniques to provide the most learning. Traditionally, education is viewed as an instructor teaching a class, but much research has gone into studying how the human brain learns new information. There is no definitive answer for the best way to make people learn a new subject, yet there are many strategies that apply psychology techniques to improve learning. The boom of an entertainment pastime has brought new forms of technology that have the capability for more than just games.
 GeoPursuit is an experiment about the benefits of interactive digital media on short- and long-term learning versus more traditional learning methods. This experiment is created and led by Colorado State University students Jordan Rust, Bailey Hust, Sam McKay and Jenelle Dobyns. Learn more about the team behind GeoPursuit on our <a href="/about">About</a> page.
                </StyledText>
                <br/>
                <Heading2>Methodology</Heading2>
                <StyledText>
                Our experiment will compare traditional learning methods with modern interactive learning methods to answer the question, "Does digital-based interactive content encourage short- and long-term learning in participants over traditional presentation-style content?"
                </StyledText>
                <br/>
                <StyledText>
                The experiment will be divided into 2 groups. The experiment will start with all participants, regardless of group, being read a short synopsis of how the experiment will be run and what we hope to learn from said experiment. Within this we will tell the participants the capacity to which we will use their data and how it will be anonymized to protect their rights. All participants will then begin with a preliminary, standardized geography test to determine their proficiency in this subject. Once the preliminary exam has been taken we will move to the next phase where grouping is required. 
                </StyledText>
                <br/>
                <StyledText>
                Group one will be taken to the interactive content page that features a map of Africa and the names of each country therein. The map will feature several elements of interaction. The participants in this group will be instructed to learn as much about the geography of each country silhouette as possible as they will be matching names to country silhouettes afterward.
                <br/>
                Group two will be taken to the presentation content page that will feature slides on each of the African countries that they will be tested on. The presentation will consist of the country name and silhouette. The participants in this group will be instructed to learn as much as they can about the geography of each country silhouette so that they are able to match country names to silhouettes afterward.
                </StyledText>
                <br/>
                <StyledText>
                After completing the learning portion of the experiment, both groups will be directed to the same test that they took prior to the learning portion of the experiment. They will be asked to complete the test a second time.
                </StyledText>
                <br/>
                <StyledText>
                After a week of the participant returning to their daily routine we will request that they return to the designated experimentation room for further testing. Upon the second trial they will once again be reminded of their rights and then be given the same test they completed the first time they were tested. Through this we hope to see which of the mediums of education used lead to the highest rate of knowledge-retention by comparing participants previous scores and determine whether the difference in group scores is statistically significant.
                </StyledText>
              </DivRight>
            </ColWrapper>


            <br/>
        </main>
    </>
  )
}
