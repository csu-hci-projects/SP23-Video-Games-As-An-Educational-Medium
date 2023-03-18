import styled from 'styled-components'

const FooterSection = styled.div`
background: #000;
color: #fff;
height: 60px;
display: flex;
justify-content: center;
align-items: center;`

const Footer = () => {
  return (
	<FooterSection>
		<p>Experiment Created for CS464 to Test Learning Modalities</p>
	</FooterSection>
  )
}

export default Footer