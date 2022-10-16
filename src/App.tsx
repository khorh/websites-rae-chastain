import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./organisms/Footer/Footer";
import Nav from "./organisms/Nav/Nav";
import About from "./pages/About/About";
import Books from "./pages/Books/Books";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Books />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
