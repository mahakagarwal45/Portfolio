import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sentiment from "../../Assets/Projects/SA.png";
import waste2best from "../../Assets/Projects/W2B.jpeg";
import plagiarism from "../../Assets/Projects/code_plag.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Fine-Grained Sentiment Analysis"
              description="Comparative study of LSTM, Decision Tree, Random Forest, and Logistic Regression on customer review data. Extensive preprocessing, feature engineering, and accuracy evaluation. Achieved highest performance with Random Forest."
              ghLink="https://github.com/mahakagarwal45/Sentiment_Analysis.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waste2best}
              isBlog={false}
              title="Waste2Best: Smart Waste Management"
              description="An AI-driven waste classification and management platform that promotes upcycling and proper disposal practices. Uses image classification for sorting waste and provides suggestions for recycling or transforming waste into usable products."
              ghLink="https://github.com/mahakagarwal45/Waste2Best.git"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plagiarism}
              isBlog={false}
              title="Code Plagiarism Detection System"
              description="System for detecting semantic code plagiarism using AST and NLP-based techniques. Supports Python and Java, visualizes similarity score, and flags suspicious code using cosine similarity and AST tree comparison."
              ghLink="https://github.com/mahakagarwal45/Code_Plagiarism_Detector.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
