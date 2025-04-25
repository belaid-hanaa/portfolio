import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiLaravel,
  SiFastapi,
  SiDjango,
  SiReact,
  SiApachekafka,
  SiFlask,
  SiPostman,
  SiDocker,
  SiGit,
  SiUml,
} from "react-icons/si";



const toolsdev = [
  { icon: SiLaravel, name: "Laravel" },
  { icon: SiFastapi, name: "FastAPI" },
  { icon: SiReact, name: "React" },
  { icon: SiDjango, name: "Django" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiGit, name: "Git" },
  { icon: SiApachekafka, name: "Kafka" },
  { icon: SiFlask, name: "Flask" },
  { icon: SiUml, name: "UML" }
];

function Toolsdev() {
  return (
    <Row className="tech-stack-row" style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div className="tech-stack-wrapper">
        {/* Display each tool from toolsdev */}
        {toolsdev.map(({ icon: Icon, name }, index) => (
          <Col key={index} xs={4} md={2} className="tech-icons">
            <Icon size={50} />
            <p style={{ fontSize: "0.4em", marginTop: "5px", textAlign: "center", fontFamily: "Press Start 2P" }}>{name}</p>
          </Col>
        ))}
      </div>
    </Row>
  );
}

export default Toolsdev;
