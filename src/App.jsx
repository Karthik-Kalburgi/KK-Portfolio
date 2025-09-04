import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import MyWork from "./Pages/MyWork";
import Contact from "./Pages/Contact";
import ThankYou from "./Pages/ThankYou";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mywork" element={<MyWork />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
