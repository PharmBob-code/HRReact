import { Link } from "react-router-dom";

export default function Modal({ toggleModal, closeModal }) {
  return (
    <div className="menu-modal">
      <div className="modal-content">
        <div className="close" onClick={toggleModal}>
          &times;
        </div>
        <div className="list">
          <a href={"./"} onClick={closeModal}>
            <p>Home</p>
          </a>
          <a href={"./about"} onClick={closeModal}>
            <p>About Us</p>
          </a>
          <a href={"./services"} onClick={closeModal}>
            <p>Services</p>
          </a>

          <a href={"./contact"} onClick={closeModal}>
            <p>Contact</p>
          </a>
          <a href={"./blog"}>
            <p>Blog</p>
          </a>
        </div>
      </div>
    </div>
  );
}
