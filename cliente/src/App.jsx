import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import Sigin from './pages/sigin';
import Signout from './pages/singout';
import Header from './components/Header';


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>

        <Route path = "/" element={<Home />} />
        <Route path = "/sign-in" element={<Sigin />} />
        <Route path = "/sign-out" element={<Signout />} />
        <Route path = "/profile" element={<Profile />} />
        <Route path = "/about" element={<About />} />

      </Routes>
    </BrowserRouter>
  )
  
}
