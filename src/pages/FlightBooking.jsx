import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

import "../components/common/Header/Header.css"
import flightData from "../flights.json"

const BookingPage = () => {
  const navigate = useNavigate();
  const [selectedFlight, setSelectedFlight] = useState(null);

  const proceedToPayment = (flight) => {
    navigate("/payment", { state: { flight: flight } });
  };

  return (
    <div>
      <h2>Booking Page</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Flight</th>
            <th>Departure</th>
            <th>Destination</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {flightData.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightName}</td>
              <td>{flight.departure}</td>
              <td>{flight.destination}</td>
              <td>{flight.amount} INR</td>
              <td>
                <Button 
                  variant="success" 
                  onClick={() => proceedToPayment(flight)}>
                  Select
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BookingPage;
