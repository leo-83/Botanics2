import AboutUsCard from "./AboutUsCard";
import React from "react";
import "./Card.css";
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
    image: "",
    desc: "Team Member",
  },
  {
    name: "Brennen",
    image: "",
    desc: "Team Member",
  },
  {
    name: "Christian",
    image: "",
    desc: "Team Member",
  },
];
const AboutUs = () => {
  return (
    <div>
      <h1>About Us</h1>
      <div>
        {teamMembers.map((e) => {
          return <AboutUsCard name={e.name} image={e.image} desc={e.desc} />;
        })}
      </div>
    </div>
  );
};

export default AboutUs;
