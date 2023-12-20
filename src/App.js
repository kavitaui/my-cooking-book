// import logo from './logo.svg';
// import './App.css';

import { Outlet } from "react-router-dom";
import Header from "./Cook-Book/Header";
import Footer from "./Cook-Book/Footer";



function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
