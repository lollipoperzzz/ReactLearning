import './App.css'
import Header from './components/Header/Header.jsx'
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import Feed from "./components/Feed/Feed";
import {BrowserRouter, Route} from "react-router-dom"
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' component={Dialogs}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/feed' component={Feed}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>

                {/*<Profile/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
