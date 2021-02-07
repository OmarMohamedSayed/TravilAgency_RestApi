import { GiIsland } from "react-icons/gi"
import { MdLocationOn } from "react-icons/md"
import { AiOutlineSearch } from "react-icons/ai"
import { FiSun } from "react-icons/fi"
import styled from "styled-components"
import { FaBars, FaRegSnowflake } from "react-icons/fa"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  z-index: 100;
  position: relative;
`

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  text-decoration: none;

  &:hover {
    color: #f6653c;
    transition: 0.3s ease-in;
  }
`
export const Island = styled(GiIsland)`
  font-size: 3rem;
  color: #f6653c;
`
export const Locationgo = styled(MdLocationOn)`
  color: #fff;
  width: 1.7rem;
  height: 2.5rem;
  margin-right: 1rem;

  &:hover {
    color: #f6653c;
    transition: 0.3s ease-in-out;
  }
`
export const Searchlog = styled(AiOutlineSearch)`
  color: #fff;
  width: 1.7rem;
  height: 2.5rem;
  margin-right: 1rem;

  &:hover {
    color: #f6653c;
    transition: 0.3s ease-in-out;
  }
`
export const Snowlog = styled(FaRegSnowflake)`
  color: #fff;
  width: 1.3rem;
  height: 2.5rem;
  margin-right: 1rem;

  &:hover {
    color: #f6653c;
    transition: 0.3s ease-in-out;
  }
`
export const SunLog = styled(FiSun)`
  color: #fff;
  width: 1.7rem;
  height: 2.5rem;
  margin-right: 1rem;

  &:hover {
    color: #f6653c;
    transition: 0.3s ease-in-out;
  }
`
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavMenuLogo = styled.div`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
