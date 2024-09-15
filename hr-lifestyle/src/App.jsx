import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "./Mobile.css";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./components/NotFound";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/index.html" element={<Navigate to="/" replace />} />
          <Route
            path="/"
            element={
              <Home
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
              />
            }
          />
          <Route
            path="/services"
            element={
              <ServicesPage
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage
                toggleModal={toggleModal}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
