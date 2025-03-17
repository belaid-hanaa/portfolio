import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Toolsdev from "./Toolsdev";
import ToolsAI from "./ToolsAI";
import Toolsdata from "./Toolsdata";



function skills() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading-skills">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Toolsdev />
        <h1 className="project-heading-skills">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <ToolsAI />
        <h1 className="project-heading-skills">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Toolsdata />

      </Container>
    </Container>
  );
}

export default skills;
