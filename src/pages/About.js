import { Link } from "react-router-dom"
import useCount from "../stores/count"
import logo from "../logo.svg"
import useCountPersisted from "../stores/count-persisted"

const About = () => {
  const [count] = useCount()
  const [countPersist] = useCountPersisted()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ color: 'aquamarine' }}>
          This is About Page.
        </p>
        <p>
          Count from Home: {count}
          <br />
          Count from Home (Persisted): {countPersist}
        </p>
        <Link className="App-link" to="/">
          Go To Home
        </Link>
      </header>
    </div>
  )
}

export default About