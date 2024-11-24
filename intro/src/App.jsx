import './App.css';
import Coin from './components/Coin';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
  <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="coin" element={<Coin/>} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;

