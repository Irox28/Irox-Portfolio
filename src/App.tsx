import Index from "./pages/Index"
import Prix from "./pages/Prix"
import Competences from "./pages/Competences"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/price" element={<Prix/>} />
        <Route path="/skills" element={<Competences/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
