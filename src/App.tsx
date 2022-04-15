import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/organisms/Nav/Nav";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Divider from "./components/Divider/Divider";
import Footer from "./components/organisms/Footer/Footer";

function App() {
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
