import React, { createContext, useContext, useState } from "react";
import Modal from "../components/Modal";
const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, toggleModal }}>
      {children}
      {isModalOpen && <Modal toggleModal={toggleModal} />}
    </ModalContext.Provider>
  );
};
