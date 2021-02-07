import React, { useState } from "react"
import Footer from "./Footer"
import Header from "../Headers/Header"
import { GlobalStyle } from "./styles/GlabalStyles"
import SearchSlide from "./SearchSlider/SearchSlide"

const Layout = ({ children }) => {
  const [open, isOpened] = useState(false)
  const SlideOpen = e => {
    isOpened(!open)
  }
  return (
    <>
      <GlobalStyle />
      <Header taggle={SlideOpen} />
      <SearchSlide isOpen={open} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
