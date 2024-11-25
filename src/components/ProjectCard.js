import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, onClick }) => {
  return (
    <Col
      size={12}
      sm={6}
      md={4}
      onClick={onClick}
      style={{ cursor: "pointer" }}>
      <div className="proj-imgbx">
        <div className="proj-txtx">
          <h4>{title}</h4>
        </div>
      </div>
    </Col>
  );
};
