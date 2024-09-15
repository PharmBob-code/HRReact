import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <h3>Connect With US</h3>
        <div className="location wrap">
          <i className="fa-solid fa-location-dot"></i>
          <p>Abuja</p>
        </div>
        <div className="email wrap">
          <i className="fa-solid fa-envelope"></i>
          <a href="mailto:infohrlifestyle@gmail.com?subject=Hello&body=With care from HR-Lifestyle?">
            <p>infohrlifestyle@gmail.com</p>
          </a>
        </div>
        <div className="contact wrap">
          <i className="fa-solid fa-phone"></i>
          <a href="tel:234-8037-736-306">
            <p>+2348133312135</p>
          </a>
        </div>
      </div>
      <div className="center">
        <h3>Quick Links</h3>
        <div className="location">
          <Link to={"/about"}>
            <p>About Us</p>
          </Link>
        </div>
        <div className="email">
          <Link to={"/services"}>
            <p>Services</p>
          </Link>
        </div>
        <div className="contact">
          <Link to={"/contact"}>
            <p>Contact US</p>
          </Link>
        </div>
      </div>
      <div className="right">
        <h3>Connect With Us</h3>
        <div className="social-media">
          <div className="icon-box">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-facebook"></i>
          </div>
          <div className="icon-box">
            <i className="fa-brands fa-x-twitter"></i>
            <i className="bi bi-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
