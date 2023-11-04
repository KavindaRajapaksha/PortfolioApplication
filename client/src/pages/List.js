import React from "react";
import "./List.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
const List = () => {
  const navigate = useNavigate();
  const [client, setClient] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/clients/`)
      .then((res) => {
        setClient(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const deleteMessage = (id) => {
    axios
      .delete(`http://localhost:8000/clients/delete/${id}`)
      .then((res) => {
        alert("client deleted successfully");
        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="List-pg">
      <div className="List-content">
        <div className="List-container">
          <table className="client-table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>

                <th scope="col">Manage Details</th>
              </tr>
            </thead>
            <tbody>
              {client.map((client) => (
                <tr key={client._id}>
                  <td>{client.fullName}</td>
                  <td>{client.email}</td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => {
                        navigate(`/viewmessage/${client._id}`);
                      }}
                    >
                      View Message
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteMessage(client._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default List;
