import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import backgroundImg from "../assets/img/color-sharp.png"; // Update with your actual background image path
import "./Achievements.css"; // Create a CSS file for styling

export const Achievements = () => {
  return (
    <section
      className="achievements"
      style={{ backgroundImage: `url(${backgroundImg})` }}>
      <Container>
        <h2 className="section-title">Achievements</h2>
        <Row>
          <Col md={4}>
            <div className="achievement-card">
              <h3>Certifications</h3>
              <ul>
                <li>Red Hat Global Certification</li>
                <li>AWS Fundamentals Badge</li>
                <li>AWS Academy Cloud Architecting Graduate</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="achievement-card">
              <h3>Competitive Programming</h3>
              <ul>
                <li>Solved 600+ problems on CodeChef</li>
                <li>Solved 150+ problems on LeetCode</li>
                <li>Solved 100+ problems on Codeforces</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="achievement-card">
              <h3>Hackathon Wins</h3>
              <ul>
                <li>2nd Place - Workathon (Consultancy Deployment Domain)</li>
                <li>Participated in 5 hackathons</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
