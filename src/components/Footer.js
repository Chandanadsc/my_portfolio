import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center justify-content-between text-center">
          <Col xs={12} sm={4} className="footer-details">
            <Row>
              <p className="footer-contact">
                Contact: <a href="tel:+919392182775">91+ 9392182775</a>
              </p>
            </Row>
            <Row>
              <p className="footer-contact">
                <a href="mailto:devisrichandanaviyyapu@gmail.com">
                  devisrichandanaviyyapu@gmail.com
                </a>
              </p>
            </Row>
          </Col>
          <Col xs={12} sm={4} className="footer-links">
            <p>
              <a href="https://linkedin.com/in/devi-sri-chandana-viyyapu-656220264">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>{" "}
              |{" "}
              <a href="https://github.com/Chandanadsc">
                <i className="fab fa-github"></i> GitHub
              </a>{" "}
              |{" "}
              <a href="https://twitter.com/cupcakecontact">
                <i className="fab fa-twitter"></i> Twitter
              </a>{" "}
              |{" "}
              <a href="https://codechef.com/users/chandana27075">
                <i className="fab fa-codechef"></i> CodeChef
              </a>{" "}
              |{" "}
              <a href="https://leetcode.com/chandana270072005">
                <i className="fab fa-leetcode"></i> LeetCode
              </a>
            </p>
          </Col>
        </Row>
        <Row></Row>
      </Container>
    </footer>
  );
};

export default Footer;
