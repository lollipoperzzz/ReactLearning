import logo from './logo.svg'
import './App.css'
import Header from './components/Header.jsx'
import Navbar from "./components/NavBar"
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}

export default App;
