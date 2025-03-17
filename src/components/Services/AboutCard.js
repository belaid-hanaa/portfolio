import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Passionate about technology and innovation, I offer services in <span className="purple"> web development, data analytics, and artificial intelligence,</span>
          designing high-performance solutions tailored to each project's needs. My expertise also extends to<span className="purple"> data engineering, design, 
          as well as management and organization.</span> In addition to my technical skills, I am <span className="purple">actively involved in managing and organizing events within clubs and associations,</span>
          bringing a structured and efficient approach to planning, coordination, and execution. With this dual expertise, I help my clients transform their ideas into concrete achievements,
          combining innovation, creativity, and strategic management. 🚀✨


          </p>
          
          <footer className="blockquote-footer">Hanaa Belaid </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
