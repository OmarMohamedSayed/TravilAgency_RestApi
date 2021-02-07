import styled from "styled-components"
import { BiPlay } from "react-icons/bi"

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
export const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh -80px);
  max-height: 100%;
  padding: 0rem calc((100vm-1300px) / 2);
`
export const HeroItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;
  height: 100vh;
  max-width: 50%;
  max-height: 100%;
  padding: 0 1rem;
  color: #fff;
  line-height: 1.1.%;
  font-weight: bold;

  @media screen and (max-width: 500px) {
    max-width: 70%;
    padding: 0;
  }
`
export const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 5rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
`
export const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
  font-weight: 400;
`
export const VedioIcon = styled(BiPlay)`
  width: 60px;
  height: 60px;
  position: relative;
  border-radius: 50%;
  padding: 18px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  &:hover {
    color: black;
    transition: 0.3s ease-in-out;
    background-color: white;
  }
`
