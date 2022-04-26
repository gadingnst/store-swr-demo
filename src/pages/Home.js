import { Link } from "react-router-dom"
import GetCount from "../components/GetCount"
import SetCount from "../components/SetCount"
import logo from "../logo.svg"

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is Home page.
        </p>
        <p style={{ fontSize: 14, marginTop: -20 }}>
          See About page to make sure that state will be there.
          <br />
          Refresh the page to make sure that persisted & normal state are different.
        </p>
        <SetCount />
        <GetCount />
        <Link className="App-link" to="/about">
          Go To About
        </Link>
      </header>
    </div>
  )
}

export default Home