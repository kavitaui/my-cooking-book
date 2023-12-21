// import logo from './logo.svg';
// import './App.css';

import { Outlet } from "react-router-dom";
import Header from "./Cook-Book/Header";
import Footer from "./Cook-Book/Footer";
import Navbar from "./LearnDropDownMenu/Components/Navbar";




function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
      <Navbar/>
    </div>
  );
}

export default App;
