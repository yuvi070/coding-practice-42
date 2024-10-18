// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const ShowDarkBackground = isDarkTheme ? 'bg-dark' : 'bg-light'
        const showTextColor = isDarkTheme ? 'dark-text' : 'light-text'
        const showHomeImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
        return (
          <div className={`home-container ${ShowDarkBackground}`}>
            <img src={showHomeImage} alt="" className="center-main-image" />
            <h1 className={showTextColor}>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
