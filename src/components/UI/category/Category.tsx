import React from "react";

import { Container, Row, Col } from "reactstrap";

import "../../../styles/category.css";

const categoryData = [
  {
    display: "Electronics",

  },
  {
    display: "Food",

  },

  {
    display: "Vegitable",

  },

  {
    display: "Grocery",
    
  },
];

const Category = () => {
  return (
    <Container>
      <Row>
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
            <div className="category__item d-flex align-items-center gap-3">
              <div className="category__img">
               
              </div>
              <h6>{item.display}</h6>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
