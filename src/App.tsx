import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./organisms/Footer/Footer";
import Nav from "./organisms/Nav/Nav";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
