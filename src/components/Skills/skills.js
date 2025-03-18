import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Toolsdev from "./Toolsdev";
import Toolsdata from "./Toolsdata";



function skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading-skills">
        <strong className="purple">Data Science Tools </strong>
        </h1>
        <Toolsdata />
        <h1 className="project-heading-skills">
         <strong className="purple">Development Tools          </strong>
        </h1>

        <Toolsdev />
        

      </Container>
    </Container>
  );
}

export default skills;
