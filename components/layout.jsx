import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div className="bg-gradient-to-r
    from-base-200
    via-base-300
    to-accent background-animate `}" data-theme="luxury">
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout