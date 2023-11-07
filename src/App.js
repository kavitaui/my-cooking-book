// import logo from './logo.svg';
// import './App.css';
import AddRecipie from "./Cook-Book/AddRecipie";
import AllInOne from "./Cook-Book/AllInOne";
import Header from "./Cook-Book/Header";
import Footer from "./Cook-Book/Footer";
function App() {
  return (
    <div className="App">
     
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
        {/* </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       
     <Header/>
     <AllInOne/>
     <AddRecipie/>
     <Footer/>
    </div>
  );
}

export default App;
