import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
	height: 70px;
	background: #fff;
	color: #202733;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 1em;
`

const StyledLink = styled.a`
	padding: 0rem 2rem;
	color: #202733;`

const StyledUl = styled.ul`
	list-style-type: none;
	display: inline-flex;
	`

const LogoDiv = styled.div`
	font-size: 1.5em;
	font-weight: 800;
`

const Navbar = () => {
  return (
	<Nav>
		<LogoDiv>	
			<StyledLink href="/">
				GeoPursuit
			</StyledLink>
		</LogoDiv>
		<div>
			<StyledUl>
				<li>
					<StyledLink href="/">
						Home
					</StyledLink>
				</li>
				<li>
					<StyledLink href="/experiment">
						Experiment
					</StyledLink>
				</li>
				<li>
					<StyledLink href="/test">
						Test (dev purposes)
					</StyledLink>
				</li>
			</StyledUl>
		</div>
	</Nav>
  )
}

export default Navbar