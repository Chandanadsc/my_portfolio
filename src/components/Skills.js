import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // Import the styles
import "./Skills.css"; // Create a CSS file for styling

export const Skills = () => {
  const skillsData = [
    { name: "JavaScript", percentage: 90 },
    { name: "Java", percentage: 80 },
    { name: "Python", percentage: 85 },
    { name: "SQL", percentage: 75 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "React.js", percentage: 90 },
    { name: "Node.js", percentage: 80 },
    { name: "AWS", percentage: 70 },
  ];

  return (
    <section className="skill common-background" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Technical Skills</h2>
              <p>
                <strong>Languages:</strong> JavaScript, Java, Python, SQL <br />
                <strong>Web Technologies:</strong> HTML, CSS, React.js, Next.js
                (learning), Node.js, Express.js, AWS SDK <br />
                <strong>Database Management:</strong> MongoDB, MySQL, PostgreSQL{" "}
                <br />
                <strong>DevOps:</strong> Docker, AWS (ECS, S3, Lambda,
                EC2/Fargate), Cloudflare, Redis, Jenkins
              </p>
              <Row>
                {skillsData.map((skill, index) => (
                  <Col key={index} md={3} className="skill-item">
                    <div className="skill-name">{skill.name}</div>
                    <div className="skill-bar">
                      <CircularProgressbar
                        value={skill.percentage}
                        text={`${skill.percentage}%`}
                        styles={{
                          path: {
                            stroke: `#4caf50`, // Green color for the filled part
                          },
                          text: {
                            fill: "#fff", // Text color
                            fontSize: "16px",
                          },
                          trail: {
                            stroke: "#e0e0e0", // Background color
                          },
                        }}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
