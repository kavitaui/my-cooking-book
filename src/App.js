// import logo from './logo.svg';
// import './App.css';
import AllInOne from "./Cook-Book/AllInOne";
import Header from "./Cook-Book/Header";
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
    </div>
  );
}

export default App;
