import TopColor from "../components/TopColor";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import BreadCrumbs from "../components/BreadCrumbs";
import Form from "../components/Form";
import FloatingActionButton from "../components/FloatingActionButton";
import { useState } from "react";
export default function ContactPage({ toggleModal, isModalOpen, closeModal }) {
  const [msgModal, setMsgModal] = useState(false);
  const [dispMsg, setDispMsg] = useState("");
  const [errorCheck, setErrorCheck] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const toggleMsgModal = () => {
    setMsgModal((prev) => !prev); // Correctly toggles the msgModal state
  };
  const title = "CONTACT US";
  return (
    <div>
      <TopColor />
      <Navbar
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      <PageHeader
        title={title}
        className="contact-page"
        breadcrumbs={<BreadCrumbs title={title} />}
      />

      <div className="contact-main">
        <div className="left">
          <h3>Get in Touch</h3>
          <hr />
          <div className="address box">
            <div className="top">
              <i className="bi bi-geo-alt-fill"></i>
              <h6>Address</h6>
            </div>
            <h4>Abuja</h4>
          </div>

          <div className="phone box">
            <div className="top">
              <i className="bi bi-telephone-fill"></i>
              <h6>Phone</h6>
            </div>
            <a href="tel:234-8037-736-306">
              <h4>+2348133312135</h4>
            </a>
          </div>

          <div className="email box">
            <div className="top">
              <i className="bi bi-envelope-fill"></i>
              <h6>Email</h6>
            </div>
            <a href="mailto:infohrlifestyle@gmail.com?subject=Hello&body=With care from HR-Lifestyle?">
              <h4>infohrlifestyle@gmail.com</h4>
            </a>
          </div>

          <div className="map"></div>
        </div>

        <div className="right" id="formContent">
          <h3>Send us a Message</h3>
          <hr />
          <Form
            toggleMsgModal={toggleMsgModal}
            setDispMsg={setDispMsg}
            errorCheck={errorCheck}
            setErrorCheck={setErrorCheck}
          />
        </div>
      </div>
      {msgModal && (
        <div id="messageModal" className="msgmodal" onClick={toggleMsgModal}>
          <div className="msgmodal-content">
            <p id="modal-message">{dispMsg}</p>
            <span className="close" onClick={toggleMsgModal}>
              &times;
            </span>
          </div>
        </div>
      )}
      <FloatingActionButton />
      <Footer />
    </div>
  );
}
