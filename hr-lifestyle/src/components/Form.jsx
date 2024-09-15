import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Form({
  toggleMsgModal,
  setDispMsg,
  errorCheck,
  setErrorCheck,
}) {
  const formRef = useRef(null);
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate name
    if (input.name.trim() === "") {
      setErrorCheck((prev) => ({ ...prev, name: "Please enter a valid name" }));
      isValid = false;
    } else {
      setErrorCheck((prev) => ({ ...prev, name: undefined })); // Clear error if valid
    }

    // Validate email
    if (!input.email.includes("@")) {
      setErrorCheck((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
      isValid = false;
    } else {
      setErrorCheck((prev) => ({ ...prev, email: undefined })); // Clear error if valid
    }

    // Validate phone
    if (input.phone.length < 10) {
      setErrorCheck((prev) => ({
        ...prev,
        phone: "Please enter a valid phone number",
      }));
      isValid = false;
    } else {
      setErrorCheck((prev) => ({ ...prev, phone: undefined })); // Clear error if valid
    }

    // Validate message
    if (input.message.trim() === "") {
      setErrorCheck((prev) => ({
        ...prev,
        message: "Please enter a valid message",
      }));
      isValid = false;
    } else {
      setErrorCheck((prev) => ({ ...prev, message: undefined })); // Clear error if valid
    }

    if (isValid) {
      EmailJs();
      toggleMsgModal();
      setInput({ name: "", email: "", phone: "", message: "" });
      setErrorCheck({}); // Clear errors on successful submission
    }
  };

  const EmailJs = () => {
    emailjs
      .sendForm("OsteoBob", "OsteoBob", formRef.current, "nDxCy4z0AC3U56UC1")
      .then(
        (result) => {
          setDispMsg(
            `Message sent successfully, We will get back to you shortly `,
            result.text
          );
        },
        (error) => {
          setDispMsg(
            `Error sending message, please check your internet connection and try again`,
            error.text
          );
        }
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="contact-form"
      noValidate
    >
      {" "}
      {/* Add noValidate here */}
      {/* Name Field */}
      <div className="form-group">
        <label htmlFor="name">Full Name:</label>
        <br />
        <input
          type="text"
          value={input.name}
          name="name"
          className="f-input"
          onChange={(e) => {
            setInput({ ...input, name: e.target.value });
            if (e.target.value.trim() !== "") {
              setErrorCheck((prev) => ({ ...prev, name: undefined })); // Clear error if valid
            }
          }}
        />
        {errorCheck.name && <p className="error">{errorCheck.name}</p>}{" "}
        {/* Display name error */}
      </div>
      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <br />
        <input
          type="email"
          value={input.email}
          name="email"
          placeholder="xyz@mail.com"
          className="f-input"
          onChange={(e) => {
            setInput({ ...input, email: e.target.value });
            if (e.target.value.includes("@")) {
              setErrorCheck((prev) => ({ ...prev, email: undefined })); // Clear error if valid
            }
          }}
        />
        {errorCheck.email && <p className="error">{errorCheck.email}</p>}{" "}
        {/* Display email error */}
      </div>
      {/* Phone Field */}
      <div className="form-group">
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          value={input.phone}
          name="phone"
          className="f-input"
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
            setInput({ ...input, phone: value });
            if (value.length >= 10) {
              setErrorCheck((prev) => ({ ...prev, phone: undefined })); // Clear error if valid
            } else {
              setErrorCheck((prev) => ({
                ...prev,
                phone: "Please enter a valid phone number",
              })); // Set error if invalid
            }
          }}
          pattern="[0-9]*" // Allow only numeric input
        />
        {errorCheck.phone && <p className="error">{errorCheck.phone}</p>}{" "}
        {/* Display phone error */}
      </div>
      {/* Message Field */}
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <br />
        <textarea
          value={input.message}
          name="message"
          rows="4"
          onChange={(e) => {
            setInput({ ...input, message: e.target.value });
            if (e.target.value.trim() !== "") {
              setErrorCheck((prev) => ({ ...prev, message: undefined })); // Clear error if valid
            }
          }}
        ></textarea>
        {errorCheck.message && <p className="error">{errorCheck.message}</p>}{" "}
        {/* Display message error */}
      </div>
      <button type="submit" className="submit">
        Submit
      </button>
    </form>
  );
}
