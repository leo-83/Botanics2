import AboutUsCard from "./AboutUsCard";
import React from "react";
import "./Card.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutUsCarousel from "./Carousel";

const teamMembers = [
  {
    name: "Austin",
    image: "/images/austin.jpeg",
    desc: "Team Member",
  },
  {
    name: "Joy",
    image: "/images/joy.png",
    desc: "Team Member",
  },
  {
    name: "Leo",
    image: "/images/leo.png",
    desc: "Team Member",
  },
  {
    name: "Brennen",
    image: "/images/brennen.JPG",
    desc: "Team Member",
  },
  {
    name: "Christian",
    image: "/images/christian.png",
    desc: "Team Member",
  },
];

const AboutUs = () => {
  return (
    <Container>
      <h1>About Us</h1>

      <Row>
        <Col xs={12}>
          <h3 className="text-center m-5">Team</h3>
        </Col>

        {teamMembers.map((e) => {
          return <AboutUsCard name={e.name} image={e.image} desc={e.desc} />;
        })}
      </Row>
    </Container>
  );
};

export default AboutUs;
