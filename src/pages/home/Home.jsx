import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutUs from './components/AboutUs';
import Overview from "./components/Overview/Overview";
import Watch from "../../design-system/components/Watch/Watch";
import CreativeSpeakers from "./components/CreativeSpeakers/CreativeSpeakers";


function home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <AboutUs/>
            <Overview/>
            <Watch/>
            <CreativeSpeakers/>
        </div>
    )
}

export default home;