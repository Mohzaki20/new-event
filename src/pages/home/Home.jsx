import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutUs from './components/AboutUs';
import Overview from "./components/Overview/Overview";


function home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <AboutUs/>
            <Overview/>
        </div>
    )
}

export default home;