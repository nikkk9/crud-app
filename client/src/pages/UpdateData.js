import React, { useEffect, useState } from "react";
import "../components/Modal.css";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateData = () => {
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

  const updateData = async () => {
    await axios.put(`/updateData/${id}`, { name, phone, email, hobby });
    navigate("/");
  };
  return (
    <>
      <div className="modal">
        <div className="modalContainer">
          <div className="inputContainer">
            <h2>UPDATE DETAILS</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Hobby"
              value={hobby}
              onChange={(e) => setHobby(e.target.value)}
            />
            <div className="btnContainer">
              <button className="submitBtn" onClick={() => updateData(id)}>
                UPDATE
              </button>
              <Link to="/">
                <button className="closeBtn">BACK</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateData;
