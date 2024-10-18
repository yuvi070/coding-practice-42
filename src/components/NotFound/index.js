// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <>
    <Navbar />
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const ShowDarkBackground = isDarkTheme ? 'bg-dark' : 'bg-light'
        const showTextColor = isDarkTheme ? 'dark-text' : 'light-text'

        return (
          <div className={`home-container ${ShowDarkBackground}`}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="center-main-image"
            />
            <h1 className={showTextColor}>Lost Your Way?</h1>
            <p className={showTextColor}>
              we cannot seem to find the page you are looking for.
            </p>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default NotFound
