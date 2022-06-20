import React, { useEffect, useState } from "react";
import "../components/Modal.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import emailjs from "emailjs-com";

const SendMail = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [hobby, setHobby] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/user/${id}`);
        // console.log(data);
        setName(data.name);
        setPhone(data.phone);
        setEmail(data.email);
        setHobby(data.hobby);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const sendMail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kw3vv4s",
        "template_6lodr8k",
        e.target,
        "vbqw1BWo0Zwykhebo"
      )
      .then(() => {
        console.log("successfully sent msg!");
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/");
  };
  return (
    <>
      <div className="modal">
        <div className="modalContainer">
          <div className="inputContainer">
            <h2>SEND EMAIL</h2>
            <form onSubmit={sendMail}>
              <input type="text" placeholder="Name" name="name" value={name} />
              <input
                type="number"
                placeholder="Phone Number"
                name="phone"
                value={phone}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
              />
              <input
                type="text"
                placeholder="Hobby"
                name="hobby"
                value={hobby}
              />
              <div className="btnContainer">
                <button className="submitBtn">SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SendMail;
