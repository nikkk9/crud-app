import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Table.css";
import { FiEdit } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Table = () => {
  const [userdata, setUserdata] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("/getData");
        setUserdata(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const deleteData = (id) => {
    axios.delete(`/deleteData/${id}`).then(() => {
      setUserdata(
        userdata.filter((elem) => {
          return elem._id !== id;
        })
      );
    });
  };

  return (
    <>
      <div className="table">
        <table>
          <tbody>
            <tr>
              <th>*</th>
              <th>ID</th>
              <th>NAME</th>
              <th>PHONE NUMBER</th>
              <th>EMAIL ID</th>
              <th>HOBBY</th>
              <th>UPDATE</th>
              <th>DELETE</th>
            </tr>
          </tbody>
          {userdata.map((data) => (
            <tbody key={data._id}>
              <tr>
                <td>
                  <Link to={`/sendMail/${data._id}`}>
                    <input type="checkbox" />
                  </Link>
                </td>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.phone}</td>
                <td>{data.email}</td>
                <td>{data.hobby}</td>
                <td>
                  <Link to={`/edit/${data._id}`}>
                    <FiEdit
                      style={{
                        fontSize: "1.2rem",
                        cursor: "pointer",
                        color: "black",
                      }}
                    />
                  </Link>
                </td>
                <td>
                  <MdDeleteOutline
                    style={{ fontSize: "1.2rem", cursor: "pointer" }}
                    onClick={() => {
                      deleteData(data._id);
                    }}
                  />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default Table;
