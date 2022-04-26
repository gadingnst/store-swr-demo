import { BrowserRouter, Route, Routes } from "react-router-dom"
import GitHubBadge from "./components/GithubBadge"
import Home from "./pages/Home"
import About from "./pages/About"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <GitHubBadge />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
