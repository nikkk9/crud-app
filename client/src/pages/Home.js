import React, { useState } from "react";
import Modal from "../components/Modal";
import Table from "../components/Table";
import "./Home.css";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {!openModal ? (
        <div className="home">
          <div className="homeContainer">
            <h2>INTERNSHIP PROJECT</h2>
            <button className="addBtn" onClick={() => setOpenModal(true)}>
              ADD NEW DATA
            </button>
            <Table />
          </div>
        </div>
      ) : (
        <Modal closeModal={setOpenModal} />
      )}
    </>
  );
};

export default Home;
