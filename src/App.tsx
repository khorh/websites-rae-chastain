import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Divider from './components/Divider/Divider';

const App = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Divider />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
