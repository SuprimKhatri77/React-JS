import Home from "./components/Home"
import About from "./components/About"
import VansList from "./components/VansList"
import VansDetail from "./components/VansDetail"
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<VansList />} />
        <Route path='/vans/:id' element={<VansDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
