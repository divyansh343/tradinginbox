import { useState } from "react"
import Footer from "./footer"
import Label from "./landing/Label"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  const [theme, settheme] = useState("lofi")

  const handleChange = (e) => {
    settheme(e.target.value);
  }
  return (
    <div className="bg-base-200" data-theme={theme}>
      <Navbar ethmem={theme} handleChange={handleChange} />
      
      <div className="">
        {children}
      </div>
      <Footer />
      {/* <Label/> */}
    </div>
  )
}

export default Layout