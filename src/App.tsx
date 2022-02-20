import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "./components/pages/Contact/Contact";
import Divider from "./components/atoms/Divider/Divider";
import Footer from "./components/organisms/Footer/Footer";
import Nav from "./components/organisms/Nav/Nav";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Divider />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
