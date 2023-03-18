import styled from 'styled-components'

const FooterSection = styled.div`
background: #fff;
color: #202733;
height: 50px;
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