// import logo from './logo.svg';
// import './App.css';

import { Outlet } from "react-router-dom";
import Header from "./Cook-Book/Header";
import Footer from "./Cook-Book/Footer";
import Navbar from "./LearnDropDownMenu/Components/Navbar";
import ProjectNav from "./PracticeDropdown/ProjectNav";




function App() {
  return (
    <div className="App">
      <div><Header />
      <Outlet />
      <Footer />
      <Navbar/></div>
     <div><ProjectNav /></div>
    </div>
  );
}

export default App;
