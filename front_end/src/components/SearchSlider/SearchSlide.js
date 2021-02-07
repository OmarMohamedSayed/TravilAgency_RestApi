import React from "react"
import styled from "styled-components"
const SearchSlide = ({ isOpen }) => {
  return (
    <SliderContainer isOpen={isOpen}>
      <form action="#">
        <input name="search" placeholder="Type to search" id="search" />
        <button type="submit">Submit</button>
      </form>
    </SliderContainer>
  )
}

export default SearchSlide

const SliderContainer = styled.div`
  position: absolute;
  width: 1200px;
  height: 90px;

  left: 18%;
  background: white;
  box-shadow: 0px 5px 5px rgba(20, 20, 20, 0.5);
  z-index: 990;
  opacity: 70%;

  top: ${({ isOpen }) => (isOpen ? "80px" : "-100px")};
  transition: 0.3s ease-in-out;
  @media screen and (max-width: 1600px) {
    left: 10%;
  }
  @media screen and (max-width: 1400px) {
    left: 7%;
  }
  @media screen and (max-width: 1300px) {
    left: 16%;
    width: 900px;
  }
  @media screen and (max-width: 1200px) {
    left: 14%;
  }
  @media screen and (max-width: 1100px) {
    left: 10%;
  }
  @media screen and (max-width: 1000px) {
    left: 15%;
    width: 700px;
  }
  @media screen and (max-width: 800px) {
    left: 19%;
    width: 500px;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }

  input {
    border: none;
    background: transparent;
    width: 70%;
    position: absolute;
    left: 5%;
    height: 80px;
    line-height: 80px;
    color: #404041;
    font-size: 2.5rem;
    font-weight: 300;
    outline: none;
    border: none;
    top: 3px;
    text-decoration: none;

    @media screen and (max-width: 800px) {
      font-size: 2rem;
    }
  }
  button {
    background: #404041;
    position: absolute;
    top: 22px;
    right: 5%;
    white-space: nowrap;
    padding: 12px 25px;
    border-radius: 50px;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    outline: none;
    border: none;
    &:hover {
      background: #f6653c;
    }
  }
`
