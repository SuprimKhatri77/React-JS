import Home from "./components/Home"
import About from "./components/About"
import VansList from "./components/VansList"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<VansList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
