import Index from "./pages/Index"
import { Route, Routes } from "react-router"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Index/>} />
      </Routes>
    </>
  )
}

export default App
