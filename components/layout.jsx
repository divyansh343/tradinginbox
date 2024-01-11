import { useState } from "react"
import Footer from "./footer"
import Label from "./landing/Label"
import Navbar from "./navbar"
import Whole from "./Whole"

const Layout = ({ children }) => {
  const [theme, settheme] = useState("dracula")

  // const handleChange = (e) => {
  //   settheme(e.target.value);
  // }
  return (
    <div className="bg-base-100" data-theme="cmyk">
      {/* <Navbar ethmem={theme} handleChange={handleChange} /> */}
      {/* <Whole ethmem={theme} handleChange={handleChange}  /> */}
      <div className="">
        {children}
      </div>
      {/* <Footer /> */}
      {/* <Label/> */}
    </div>
  )
}

export default Layout