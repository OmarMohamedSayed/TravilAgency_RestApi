import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  Nav,
  NavLink,
  Island,
  Bars,
  NavMenu,
  NavMenuLogo,
  Searchlog,
  Snowlog,
  SunLog,
  Locationgo,
} from "./HeaderStyledElements"

const Header = ({ taggle }) => {
  const header = useStaticQuery(graphql`
    query headerquery {
      allMainmenu {
        edges {
          node {
            title
            link
          }
        }
      }
    }
  `)

  const menus = header.allMainmenu.edges

  return (
    <Nav>
      <NavLink to="/">
        <Island />
        Travilo
      </NavLink>
      <Bars />
      <NavMenu>
        {menus.map((item, i) => {
          return (
            <NavLink to={item.node.link} key={i}>
              {item.node.title}
            </NavLink>
          )
        })}
      </NavMenu>
      <NavMenuLogo>
        <Locationgo />
        <Searchlog onClick={taggle} />
        <Snowlog />
        <SunLog />
      </NavMenuLogo>
    </Nav>
  )
}

export default Header
