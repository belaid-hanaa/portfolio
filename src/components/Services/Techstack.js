import React from "react";
import { Col, Row } from "react-bootstrap";

// Importer les images correspondantes à chaque technologie
import fstt from "../../Assets/fstt.png";
import te from "../../Assets/TE.jpeg";
import Cosumar from "../../Assets/cosumar.png";
import lgd from "../../Assets/lgd.jpg";
import charity from "../../Assets/lgd2.jpg";
function Techstack() {
  const techs = [
    { img: fstt, title: "Faculté des Sciences et Techniques", description: "At FSTT, I developed expertise in web development (Laravel,django,Fastapi, React) and artificial intelligence (machine learning, deep learning...)" },
    { img: te, title: "TE Connectivity", description: "During my internship at TE Connectivity, I gained hands-on experience in data analytics and engineering, working with Python, SQL, and machine learning to extract insights and optimize operations." },
    { img: Cosumar, title: "Cosumar", description: "At Cosumar, my observational internship provided knowledge in network infrastructure, data architecture, and IT systems, enhancing my understanding of enterprise networks." },
    { img: lgd, title: "The Legends Club", description: "As Head of the IT Department, I lead technical projects and mentor members. I also coordinate training sessions on Spring Boot, Angular, and AI, ensuring effective skill development." },
    { img: charity, title: "Charity Work", description: "I am committed to giving back to the community through volunteer work and charitable activities, offering my skills and time to support social initiatives and make a positive impact." },
   
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
