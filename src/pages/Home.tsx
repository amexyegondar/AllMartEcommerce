import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Category from "../components/UI/category/Category";
import ProductCard from "../components/UI/product-card/ProductCard";
import TestimonialSlider from "../components/UI/slider/TestimonialSlider";
import Helmet from "../components/Helmet/Helmet";
import products from "../assets/fake-data/products";
import heroImg from "../assets/images/hero.png";

import networkImg from "../assets/images/network.png";

import "../styles/hero-section.css";
import '../styles/home.css';


const Home: React.FC = () => {
  const [category, setCategory] = useState<string>("ALL");
  const [allProducts, setAllProducts] = useState(products);

  

 

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "Electronics") {
      const filteredProducts = products.filter(
        (item) => item.category === "Electronics"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "Food") {
      const filteredProducts = products.filter(
        (item) => item.category === "Food"
      );
      setAllProducts(filteredProducts);
    }

    if (category === "Vegitable") {
      const filteredProducts = products.filter(
        (item) => item.category === "Vegitable"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Grocery") {
      const filteredProducts = products.filter(
        (item) => item.category === "Grocery"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">
                Shop All, Save All – All Mart Ecommerce, Your One-Stop Savings Destination!
                </h5>
                <h1 className="mb-4 hero__title">
                  <span>Smart Shopping, All at All Mart –  </span>Elevate Your Online Retail Experience. <br />
                  <span> Delivered with Love!</span>
                </h1>

                <p>
                All Mart Ecommerce: Empowering Your Shopping Journey, Every Click Counts!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                <a href="#ordernow"> <button className="order__btn d-flex align-items-center justify-content-between">
                    
                    Order now 
                  </button></a>
                 

                  <button className="all__foods-btn">
                    <Link to="/products">See all Products</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>{" "}
                    Zero Shipping Weight
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i className="ri-shield-check-line"></i>
                    </span>{" "}
                    Your Safe Haven for Online Shopping.
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

   

      <section id="ordernow">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>All Products</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "Fasting" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Electronics")}
                >
                  Electronics
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "meatproduct" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Food")}
                >
                 Food
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Vegitable")}
                >
                  Vegitable
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("Grocery")}
                >
                  Grocery
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

    


      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial__title mb-4">
                  What our <span>customers</span> are saying ?
                </h2>
                <p className="testimonial__desc"></p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
