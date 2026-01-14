import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import PartyDetail from "./pages/PartyDetail"

function App() {
  return (
    <BrowserRouter basename="/PGI/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/party/:id" element={<PartyDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
