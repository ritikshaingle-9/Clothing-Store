import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './views/Home/home';
import { BrowserRouter,Routes,Route } from "react-router";
import Contact from './views/Contact/contact';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<Contact/>} />
    </Routes>
  </BrowserRouter>
)
