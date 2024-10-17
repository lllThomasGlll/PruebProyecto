import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/FeatureCardStyle.css";

const FeatureCard = ({ title, description, image, link }) => {
  return (
    <Col xs={12} sm={6} md={4} className="mb-4">
      <Link to={link} style={{ textDecoration: "none" }}>
        <Card className="custom-card">
          {image && <Card.Img variant="top" fluid src={image} />}
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default FeatureCard;
