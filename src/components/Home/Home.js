import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./about";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content" style={{ textAlign: "center" }}>
          <Row className="justify-content-center">
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hello
              </h1>

              <h1 className="heading-name">
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
