import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/organisms/Nav/Nav";
import Footer from "./components/organisms/Footer/Footer";
import Divider from "./components/atoms/Divider/Divider";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route></Route>
            </Routes>
            <Divider />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
