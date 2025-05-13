import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FlowerImage from "../assets/flower.JPG";

const PromoBanner = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #fbd6e4 0%, #fce5ef 100%)",
        padding: "50px 0",
      }}
    >
      <Container>
        <Row className="align-items-center">
          {/* Left Side Text */}
          <Col md={7}>
            <h2 style={{ fontWeight: "700" }}>
              Unleash the enchanting beauty of MyGiFT Hut Blooms!
            </h2>
            <p style={{ fontSize: "1.1rem", marginTop: "20px" }}>
              Discover our world of freshness, fragrance, and enduring charm –
              carefully hand-picked for unmatched quality, vibrant colors and
              lustrous petals exude pure elegance.
            </p>
            <Button
              variant="dark"
              className="mt-3"
              style={{ fontWeight: "600", letterSpacing: "1px" }}
            >
              SHOP NOW &nbsp; →
            </Button>
          </Col>

          {/* Right Side Image */}
          <Col md={5} className="text-center">
            <img
              src={FlowerImage}
              alt="MyGiFTHut Blooms"
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PromoBanner;
