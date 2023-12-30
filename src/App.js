import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Nav'
import Testimonial from './Components/Testimonials/Testimonial';
import Horoscope from './Components/Horoscope/Horoscope';
import Blogs from "./Components/BlogsPage/Blogs";
import BlogDetails from './Components/BlogDescription/BlogDetails';
import Daily from './Components/DailyHoroscope/Daily';
import Report from './Components/Reports/Report'
import Report24 from './Components/Report2024/Report24';
import BookAPooja from './Components/BookPooja/BookAPooja';
import Pooja from './Components/Manokamna pooja/Pooja';
import Cart from './Components/Cart/Cart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <>
    {/* <Nav/> */}
   <Router> <Routes> <Route path="/products" element={<Report/>} /> 
   <Route path="/cart" element={ <Cart/> } /> 
    {/* <Horoscope/>
    <Blogs/>
    <BlogDetails/>
    <Daily/>
    
    <Report24/>
    <BookAPooja/>
    <Pooja/> 
   */}
    </Routes>
    </Router>
   
    </>
  )
}

export default App;
