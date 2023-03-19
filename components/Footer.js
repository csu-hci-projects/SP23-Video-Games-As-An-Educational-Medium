import styled from 'styled-components'

const FooterSection = styled.div`
background: #fff;
color: #202733;
height: 40px;
min-width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

const Footer = () => {
  return (
	<FooterSection>
		<p>Experiment Created for CS464 to Test Learning Modalities</p>
	</FooterSection>
  )
}

export default Footer