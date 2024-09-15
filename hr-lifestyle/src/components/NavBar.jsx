import logo from "../assets/HR_LIFESTYLE_LOGO.png";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";
import Modal from "./Modal";
import Home from "../pages/Home";
// Add this script to your JavaScript file to control slideIn
/*window.addEventListener("scroll", () => {
  const containers = document.querySelectorAll(".container"); // Replace with your container class

  containers.forEach((container) => {
    const rect = container.getBoundingClientRect();

    // Check if the container is in the viewport
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      container.classList.add("slide-in");
      // Optionally, remove the class after it has slid in
      //window.removeEventListener("scroll", checkSlide); // Uncomment if you want to stop checking after the first slide-in
    }
  });
});*/

export default function NavBar({ toggleModal, isModalOpen, closeModal }) {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
      </Link>

      <div className="nav-area">
        <div className="nav-links">
          <Link to={"/"}>
            <div className="link">
              <p>Home</p>
            </div>
          </Link>

          <Link to={"/about"}>
            <div className="link">
              <p>About Us</p>
            </div>
          </Link>

          <Link to={"/services"}>
            <div className="link">
              <p>Services</p>
            </div>
          </Link>

          <Link to={"/contact"}>
            <div className="link">
              <p>Contact Us</p>
            </div>
          </Link>

          <a href="https://hrlifestylewithdidi.blogspot.com/">
            <div className="link">
              <p>Blog</p>
            </div>
          </a>
        </div>

        <Link to={"/contact"} className="btn">
          <button>CONNECT WITH US</button>
        </Link>
      </div>

      <MenuBar
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      {isModalOpen && (
        <Modal toggleModal={toggleModal} closeModal={closeModal} />
      )}
    </div>
  );
}
