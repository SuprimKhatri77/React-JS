import "./App.css";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <Link to='/'>Home</Link>
    <Link to='/about' style={{
      marginLeft: "10px"
    }}>About</Link>
  <Routes>
    <Route path='/' element={ <Home /> } />
    <Route path='/about' element={ <About /> } />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
