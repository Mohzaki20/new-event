import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutUs from './components/AboutUs';


function home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <AboutUs/>
        </div>
    )
}

export default home;