import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import fstt from "../../Assets/Projects/fstt.png";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple"> My Recent Works </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              title="Parkinson-Disease-Classification-ML"
              description="This project classifies Parkinson's disease using Decision Trees, SVM, and CatBoost models built from scratch. Feature selection is performed using the Evolutionary Feature Selection Algorithm (EFSA) to improve model accuracy. The project includes data preprocessing, model training, and evaluation."
              ghLink="https://github.com/belaid-hanaa/Parkinson-Disease-Classification-ML"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              title="ML Data Analysis"
              description="This Python application analyzes datasets using various ML algorithms like linear regression, decision trees, Naïve Bayes, SVM, Random Forest, K-NN, K-Means, and neural networks. It includes data import/export, preprocessing, model evaluation, result visualization, and provides documentation and tutorials."
              ghLink="https://github.com/belaid-hanaa/Machine-Learning-Application-for-Data-Analysis-in-Python"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Fuzzy Decision Making"
              description="This project implements a fuzzy case-based reasoning (Fuzzy CBR) engine for automated decision-making. It combines fuzzy logic with case-based learning to solve complex problems, evaluating past case similarities. The system is designed for applications like diagnosis, classification, and prediction, with adjustable confidence levels."
              ghLink="https://github.com/belaid-hanaa/Fuzzy-Case-Based-Reasoning-for-Automated-Decision-Making"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              title="Real-Time-ASL-Recognition"
              description="This project aims to build a real-time ASL prediction system that can recognize American Sign Language gestures and display corresponding subtitles. The system leverages Deep Learning models (CNN) for gesture recognition, Flask for the web application."
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fstt}
              title="University-Management-System"
              description="A web application to manage the Faculty of Sciences and Techniques (FSTT). It includes dynamic pages for departments, formation, news, and interactive dashboards for students, professors, and staff. Features role-based access, request management, announcements, and timetable handling."
              ghLink="https://github.com/belaid-hanaa/University-Management-System"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              title="Event-Management-System"
              description="A Python-based event management application using Qt for the GUI and MySQL for the database. It allows users to create, manage, and track events, including scheduling, participant registration, and notifications. The system provides an easy-to-use interface for both event organizers and attendees."
              ghLink="https://github.com/belaid-hanaa/Event-Management-System"
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
