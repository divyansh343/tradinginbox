import { useState, useEffect } from "react"
import Footer from "./footer"
import Label from "./landing/Label"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const [theme, settheme] = useState("winter")

  // const listenScrollEvent = () => {
  //     window.scrollY > 800
  //       ? settheme("forest")
  //       : settheme("winter")
  //   }
  // useEffect(() => {
  //   window.addEventListener("scroll", listenScrollEvent)
  // })

  const handleChange = (e) => {
    settheme(e.target.value);
  }
  return (
    <div className="bg-base-100" data-theme={theme}>
      <Navbar ethmem={theme} handleChange={handleChange} />
      <div className="">
        {children}
      </div>
      <Footer />
      <Label/>
    </div>
  )
}

export default Layout