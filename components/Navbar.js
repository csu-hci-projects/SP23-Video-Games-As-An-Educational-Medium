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

const Navbar = () => {
  return (
	<Nav>
		<div>	
			<StyledLink href="/">
				GeoPursuit
			</StyledLink>
		</div>
		<div>
			<StyledUl>
				<li>
					<StyledLink href="/">
						Home
					</StyledLink>
				</li>
				<li>
					<StyledLink href="/about">
						About
					</StyledLink>
				</li>
				<li>
					<StyledLink href="/contact">
						Contact
					</StyledLink>
				</li>
			</StyledUl>
		</div>
	</Nav>
  )
}

export default Navbar