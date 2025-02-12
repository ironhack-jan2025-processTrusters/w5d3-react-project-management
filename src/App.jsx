import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"

function App() {

  return (
    <>

      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />}  />
        <Route path="/projects" element={<p>Project List Page</p>}  />
      </Routes>

      
    </>
  )
}

export default App
