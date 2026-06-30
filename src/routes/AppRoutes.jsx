import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
// import About from "../pages/About";
// import AboutUs from "../pages/AboutUs";
// import Mission from "../pages/Mission";
// import Gallery from "../pages/Gallery";
// import Contact from "../pages/Contact";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
}