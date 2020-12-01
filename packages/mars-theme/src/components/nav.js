import React from 'react'
import { connect, styled } from 'frontity'
import Link from './link'
import Logo from './logo'

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state }) => (
  <NavContainer>
    <Logo />
    {state.theme.menu.map(([name, link]) => {
      // Check if the link matched the current page url
      const isCurrentPage = state.router.link === link
      return (
        <NavItem key={name}>
          {/* If link url is the current page, add `aria-current` for a11y */}
          <Link link={link} aria-current={isCurrentPage ? 'page' : undefined}>
            {name}
          </Link>
        </NavItem>
      )
    })}
    <Button>GET A DEMO</Button>
    <img
      src='https://assets.codepen.io/521481/search.png'
      style={{ cursor: 'pointer' }}
    />
  </NavContainer>
)

export default connect(Nav)

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 100%;
  max-width: 1373.99px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  margin: 0;
  margin-top: 22px;
  overflow-x: auto;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

const Button = styled.button`
  background-color: #6d3bf4;
  color: white;
  font-weight: normal;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  outline: none;
  border: none;
  border-radius: 0;
  cursor: pointer;
`

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    /* Use for semantic approach to style the current link */
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: '';
      display: inline-block;
      width: 24px;
    }
  }
`
