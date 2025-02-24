import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './views/Home/home';
import { BrowserRouter,Routes,Route } from "react-router";
import Contact from './views/Contact/contact';
import Login from './views/Login/login';
import Register from './views/Register/register';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    </Routes>
  </BrowserRouter>
)
