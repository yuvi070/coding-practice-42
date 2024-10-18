// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const showLogoImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const showTextColour = isDarkTheme ? 'dark-color' : 'light-color'
      const showIconImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const showNavBackgroundColor = isDarkTheme
        ? 'dark-navbar'
        : 'light-navbar'
      const showNavMainContainer = isDarkTheme
        ? 'dark-nav-main-container'
        : 'light-nav-main-container'
      const onClickChangeTheme = () => {
        toggleTheme()
      }
      return (
        <div className={showNavMainContainer}>
          <div className={`nav-container ${showNavBackgroundColor}`}>
            <img src={showLogoImage} alt="logo-image" className="logo-icon" />
            <ul className="navigation-controllers">
              <Link to="/" className="link">
                <li className={showTextColour}>Home</li>
              </Link>
              <Link to="/about" className="link">
                <li className={showTextColour}>About</li>
              </Link>
            </ul>
            <img
              src={showIconImage}
              alt=""
              onClick={onClickChangeTheme}
              className="logo-icon1"
            />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
