import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";

const Modal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hobby, setHobby] = useState("");

  const addData = async () => {
    if (!name || !phone || !email || !hobby) {
      return alert("please fill all the fields!");
    }
    try {
      const { data } = await axios.post("/addData", {
        name,
        phone,
        email,
        hobby,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="modal">
      <div className="modalContainer">
        <div className="inputContainer">
          <h2>ADD DETAILS</h2>
          <input
            type="text"
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Hobby"
            required
            value={hobby}
            onChange={(e) => setHobby(e.target.value)}
          />
          <div className="btnContainer">
            <button
              className="submitBtn"
              onClick={() => {
                addData();
                closeModal(false);
              }}
            >
              SUBMIT
            </button>
            <button className="closeBtn" onClick={() => closeModal(false)}>
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
