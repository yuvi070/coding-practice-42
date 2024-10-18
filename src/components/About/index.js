// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const ShowDarkBackground = isDarkTheme ? 'bg-dark' : 'bg-light'
        const showTextColor = isDarkTheme ? 'dark-text' : 'light-text'
        const showHomeImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
        return (
          <div className={`home-container ${ShowDarkBackground}`}>
            <img src={showHomeImage} alt="" className="center-main-image" />
            <h1 className={showTextColor}>About</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default About
