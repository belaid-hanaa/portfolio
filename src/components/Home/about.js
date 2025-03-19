import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";


function about() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
        
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "3.6em" }}>
            About Me
            </h1>
            <p className="home-about-body">
            I’m Hanaa Belaid, a first-year Master's student in Artificial Intelligence and Data Science at FSTT, Tangier. Passionate about technology, I’m focusing on AI, machine learning, and data science to solve real-world problems.
            I have a strong foundation in programming and data analysis, and I'm eager to apply my skills in deep learning and NLP. Outside of my studies, I actively engage in tech-related events and workshops.
            Feel free to explore my work and connect with me for collaborations!</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          
          
        </Row>
        
      </Container>
    </Container>
  );
}
export default about;
