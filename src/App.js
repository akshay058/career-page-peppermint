import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import Products from "./pages/Products";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Pagenotfound from "./pages/Pagenotfound";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/products" element={<Products />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />

        {/* If any route not found then execute * path component */}
        <Route path="/*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
