import React, { useState, useEffect } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import hotelData from "./HotelData.json"

const HotelBookingPage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setHotels(hotelData);
  }, []);

  return (
    <Container className="hotel-booking-container mt-5">
      <h2 className="text-center mb-4">Hotel Booking</h2>
      <Row>
        {hotels.map((hotel) => (
          <Col md={4} key={hotel.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={hotel.image} alt={hotel.name} />
              <Card.Body>
                <Card.Title>{hotel.name}</Card.Title>
                <Card.Text>
                  Location: {hotel.location}
                  <br />
                  Price per night: ${hotel.price}
                </Card.Text>
                <Button variant="primary">Book Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HotelBookingPage;
