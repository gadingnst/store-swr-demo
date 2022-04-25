import { Link } from "react-router-dom"
import useCount from "../stores/count"
import logo from "../logo.svg"

const About = () => {
  const [count] = useCount()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: 'aquamarine' }}>
          This is About Page
        </p>
        <p>Current count from Home: {count}</p>
        <Link className="App-link" to="/">
          Go To Home
        </Link>
      </header>
    </div>
  )
}

export default About