import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";

interface CommonSectionProps {
  title: string;
}

const CommonSection: React.FC<CommonSectionProps> = ({ title }) => {
  return (
    <section className="common__section">
      <Container>
        <h2 className="text-white">{title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
