import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutUs from './components/AboutUs';
import Overview from "./components/Overview/Overview";
import Watch from "../../design-system/components/Watch/Watch";
import CreativeSpeakers from "./components/CreativeSpeakers/CreativeSpeakers";
import OurPrograms from "./components/OurPrograms/OurPrograms";
import Register from "./components/Register/Register";
import AccordionComponent from "./components/Accordion/AccordionComponent/AccordionComponent";



function home() {
    return (
        <div>
            <Navbar/>
            <Header/>
            <AboutUs/>
            <Overview/>
            <Watch/>
            <CreativeSpeakers/>
            <OurPrograms/>
            <Register/>
            <AccordionComponent/>
        </div>
    )
}

export default home;