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
  const [clickCount, setClickCount] = useState(true);
  useEffect(() => {
    console.log("DOM fully loaded and parsed"); // Check if this logs
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: "0px",
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Log entry to see if it's being triggered
        if (entry.isIntersecting) {
          const container = entry.target;
          if (container.classList.contains("left")) {
            container.classList.add("slide-in-left");
          } else if (container.classList.contains("right")) {
            container.classList.add("slide-in-right");
          }
        }
      });
    }, options);

    // Observe left and right containers
    const leftContainers = document.querySelectorAll(".left"); // Use querySelectorAll
    const rightContainers = document.querySelectorAll(".right");

    // Check if left containers are found
    // Check if right containers are found

    leftContainers.forEach((container) => {
      observer.observe(container); // Observe each left container
    });

    rightContainers.forEach((container) => {
      observer.observe(container); // Observe each right container
    });

    // Cleanup function to disconnect the observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [clickCount]); // Empty dependency array means this runs once after the component mounts

  const handleAnim = () => {
    setClickCount(!clickCount);
  };
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
                anim={handleAnim}
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
