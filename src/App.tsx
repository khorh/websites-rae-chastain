import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./organisms/Footer/Footer";
import Nav from "./organisms/Nav/Nav";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Books from "./pages/Books/Books";
import Contact from "./pages/Contact/Contact";
import Illustrations from "./pages/Illustrations/Illustrations";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
