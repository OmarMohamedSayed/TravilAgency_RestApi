import React from "react"
import Video from "../../../assets/videos/video.mp4"
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroItem,
  HeroH1,
  HeroP,
  VedioIcon,
} from "./MainStyleElements"
const Hero = () => {
  var defplay = 1
  const playVideo = () => {
    if (defplay === 1) {
      var vid = document.getElementById("HeroVedio")
      vid.play()
      vid.loop = true
      defplay = 0
    } else {
      document.getElementById("HeroVedio").pause()
      defplay = 1
    }
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" id="HeroVedio" />
      </HeroBg>
      <HeroContent>
        <HeroItem>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>
            The world is a book and those who do not travel read only one page.
          </HeroP>
          <VedioIcon onClick={playVideo} />
        </HeroItem>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero
