import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
	height: 80px;
	background: #fefefe;
	color: #0b0b0b;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const StyledLink = styled.a`
	padding: 0rem 2rem;
`

const StyledUl = styled.ul`
	list-style-type: none;
	display: inline-flex;
	`

const Navbar = () => {
  return (
	<Nav>
		<div>	
			<StyledLink href="/">
				GEO
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