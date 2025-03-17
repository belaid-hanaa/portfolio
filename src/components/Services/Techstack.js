import React from "react";
import { Col, Row } from "react-bootstrap";

// Importer les images correspondantes à chaque technologie
import Image from "../../Assets/avatar.svg";
function Techstack() {
  const techs = [
    { img: Image, title: "C++", description: "A powerful language for system and application programming." },
    { img: Image, title: "JavaScript", description: "The language of the web for dynamic client-side programming." },
    { img: Image, title: "Go", description: "A statically typed, compiled language for scalable applications." },
    { img: Image, title: "Node.js", description: "JavaScript runtime for building fast and scalable server-side applications." },
    { img: Image, title: "React", description: "A library for building user interfaces with reusable components." },
   
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techs.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-card">
          <div className="tech-card-content text-center">
            <img src={tech.img} alt={tech.title} className="tech-image" />
            <h4 className="tech-title">{tech.title}</h4>
            <p className="tech-description">{tech.description}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
