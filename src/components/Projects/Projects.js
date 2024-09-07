import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";



import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="EYE-COMMERCE"
              description=" E-commerce website for individuals with
              physical disabilities ”Eye Commerce”.Design an easy-to-use and intuitive interface that allows amputees to navigate
              through an E-commerce website and also define how the user’s eye gaze will interact with the E-commerce website.The
              system requirements includes React js,Node js,Firebase,Opencv,Razorpay,dlib and PyAutoGUI"
              ghLink="https://github.com/ASWATHI-123/MainProject"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="BOOK MY SPACE"
              description="Build a web ”BOOK-MY-SPACE” to provide an online platform where users
              can pre-book their parking slots in advance and allow users to book their parking slots by simply entering their
              destination, date, and time with an extra feature of time extension and had a quantified success using python and
              f
              lask"
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              
            />
          </Col>

         

          
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
