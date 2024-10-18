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
        return (
          <div className="home-container">
            <img src="" alt="" className="" />
            <h1>Home</h1>
          </div>
        )
      }}
    </ThemeContext.Consumer>
  </>
)

export default Home
