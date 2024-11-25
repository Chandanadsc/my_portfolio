import React, { useState } from "react";
import { Container, Row, Col, Tab, Nav, Modal, Button } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "./Projects.css";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const completedProjects = [
    {
      title: "Website Monitoring System",
      description:
        "Building a website monitoring system that checks the availability of websites every 2-3 minutes and sends alerts.",
      techStack: ["JavaScript", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/Chandanadsc/website-monitoring-system",
    },
    {
      title: "Coding Problem Reminder API",
      description:
        "Developing an API that automatically sends coding problems via email to subscribed users.",
      techStack: ["Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/Chandanadsc/CodingProblems_projectak",
    },
    {
      title: "Payment Application (MERN Stack)",
      description:
        "Developed a basic payment application with frontend and backend implementation using the MERN stack.",
      techStack: ["MongoDB", "Express", "React", "Node.js"],
      githubLink: "https://github.com/Chandanadsc/paytm_app",
    },
  ];

  const ongoingProjects = [
    {
      title: "Course Selling App",
      description:
        "Developed a basic course-selling app with backend fully developed, and frontend work in progress.",
      techStack: ["React", "Node.js", "Express"],
      githubLink: "https://github.com/Chandanadsc/course_selling",
    },
    {
      title: "Automatic File Categorizer Using ML",
      description:
        "Developing a cloud-based system that uses machine learning to categorize files automatically. It integrates with Cloudflare R2 for scalable, low-cost storage, offering a seamless way to manage and organize files.",
      techStack: [
        "ML Frameworks: TensorFlow/PyTorch",
        "Cloud Storage: Cloudflare R2",
        "Frontend: React.js",
        "Backend: Node.js, Express.js",
        "Database: MongoDB",
      ],
      githubLink: "https://github.com/Chandanadsc/automaticfilesort",
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  return (
    <section className="project common-background">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Projects</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">All Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Ongoing Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Completed Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {[...completedProjects, ...ongoingProjects].map(
                            (project, index) => (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => handleProjectClick(project)}
                              />
                            )
                          )}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {ongoingProjects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleProjectClick(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {completedProjects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              onClick={() => handleProjectClick(project)}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />

      {/* Modal for Project Details */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedProject?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="project-details">
            <p>{selectedProject?.description}</p>
            {selectedProject?.techStack && (
              <div>
                <h5>Technologies Used:</h5>
                <ul>
                  {selectedProject.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => window.open(selectedProject?.githubLink, "_blank")}>
            View on GitHub
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};
