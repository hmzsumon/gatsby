import React, { Component } from "react"
import logo from "../images/logo.svg"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaBehance } from "@react-icons/all-files/fa/FaBehance"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaSketch } from "@react-icons/all-files/fa/FaSketch"
import { Link } from "gatsby"

class Header extends Component {
  constructor() {
    super()
    this.state = {
      clicked: true,
    }
  }

  changeHandler() {
    this.setState({ clicked: !this.state.clicked })
  }
  render() {
    let addClass = this.state.clicked ? "heide-links" : "show-links"
    return (
      <div>
        <nav>
          <div className="nav-center">
            <div className="nav-header">
              <img className="logo" src={logo} alt="" />

              <button
                className="nav-toggle"
                onClick={this.changeHandler.bind(this)}
              >
                <FaBars />
              </button>
            </div>

            {/* star expend Navbar */}

            <ul className={addClass}>
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/project">projects</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
              <li>
                <Link to="/images">Images</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>

            {/* end expend Navbar */}
            <ul className="links">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/project">projects</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
              <li>
                <Link to="/images">Images</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>

            <ul className="social-icons">
              <li>
                <Link to="https://www.twitter.com">
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link to="https://www.twitter.com">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="https://www.twitter.com">
                  <FaBehance />
                </Link>
              </li>
              <li>
                <Link to="https://www.twitter.com">
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link to="https://www.twitter.com">
                  <FaSketch />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Header
