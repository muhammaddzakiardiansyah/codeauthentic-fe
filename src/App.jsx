import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Product from "./pages/ProductPage"
import LearnPage from "./pages/LearnPage"

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/products" element={<Product/>} />
        <Route exact path="/learns" element={<LearnPage/>} />
      </Routes>
    </>
  )
}

export default App
