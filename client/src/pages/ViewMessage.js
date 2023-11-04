import React from 'react';
import './ViewMessage.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ViewMessage = () => {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    console.log('ID:', id);
    axios
      .get(`http://localhost:8000/clients/get/${id}`)
      .then((res) => {
        setClient(res.data);
        console.log('Client:', res.data);
      })
      .catch((error) => {
        console.error("Error fetching Client data:", error);
      });
  }, [id]);

  return (
    <div className="viewmessage">
      {client ? (
        <div className="viewmessage-container">
          <h2 className="headder">Client message</h2>
          <p className="container">
            <strong>Name:</strong> {client.fullName}
          </p>
          <p className="container">
            <strong>Email:</strong> {client.email}
          </p>
          <p className="container">
            <strong>Age:</strong> {client.age}
          </p>
          <p className="container">
            <strong>Subject:</strong> {client.subject}
          </p>
          <p className="container">
            <strong>Message:</strong> {client.message}
          </p>
        </div>
      ) : (
        <p>Loading Messages...</p>
      )}
    </div>
  );
};

export default ViewMessage;
