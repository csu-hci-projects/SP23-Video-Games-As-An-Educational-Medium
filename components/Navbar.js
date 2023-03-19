import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
	height: 40px;
	background: #fff;
	color: #202733;
	display: flex;
	justify-content: space-between;
`

const StyledLink = styled.a`
	padding: 0rem 2rem;
	color: #202733;
	font-size: 20px;
	margin-top: 2%;
`

const StyledUl = styled.ul`
	list-style-type: none;
	display: inline-flex;
	margin-top: 2%;
	`

const StyledDiv = styled.div`
	margin-top: .75%;
	font-size: 20px;
`

const Navbar = () => {
  return (
	<Nav>
		<StyledDiv>	
			<StyledLink href="/">
				GeoPursuit
			</StyledLink>
		</StyledDiv>
		<div>
			<StyledUl>
				<li>
					<StyledLink href="/">
						Home
					</StyledLink>
				</li>
				<li>
					<StyledLink href="/">
						Experiment
					</StyledLink>
				</li>
				<li>
					<StyledLink href="/about">
						About Us
					</StyledLink>

				</li>
				<li>
					<StyledLink href="/contact">
						Contact Us
					</StyledLink>
				</li>
			</StyledUl>
		</div>
	</Nav>
  )
}

export default Navbar