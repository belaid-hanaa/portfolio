import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" style={{ textAlign: "center" }}>
          <Row className="justify-content-center">
            <Col md={7} className="home-header">
              <h1 style={{ 
                  paddingBottom: 15, 
                  fontFamily: '"Press Start 2P", sans-serif', 
                  fontSize: "20px" 
                }} 
                className="heading">
                Hello
              </h1>

              <h1 className="heading-name" style={{ 
                  fontFamily: '"Press Start 2P", sans-serif', 
                  fontSize: "18px",
                  textTransform: "uppercase"
                }}>
                I'M
                <strong className="main-name"> Hanaa Belaid </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "center" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>

      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
