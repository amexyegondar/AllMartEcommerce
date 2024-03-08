import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import ProductCard from "../components/UI/product-card/ProductCard";
import { cartActions } from "../store/shopping-cart/cartSlice";
import products from "../assets/fake-data/products";

import "../styles/product-details.css";

type ParamTypes = {
  id: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  desc: string;
  image01: string;
  image02: string;
  image03: string;
}

const Productdetails: React.FC = () => {
  const [tab, setTab] = useState<string>("desc");
  // const [enteredName, setEnteredName] = useState<string>("");
  // const [enteredEmail, setEnteredEmail] = useState<string>("");
  // const [reviewMsg, setReviewMsg] = useState<string>("");
  const { id } = useParams<ParamTypes>();
  const dispatch = useDispatch();

  const product: Product | undefined = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState<string>(product?.image01 || "");
  // const cartTotalAmount: number = useSelector((state: any) => state.cart.totalAmount);
  // const shippingCost: number = 30;

  // const totalAmount: number = cartTotalAmount + shippingCost;

  const addItem = () => {
    if (product) {
      dispatch(
        cartActions.addItem({
          id: product.id,
          title: product.title,
          price: product.price,
          image01: product.image01,
        })
      );
    }
  };

  // const submitHandler = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   // console.log(enteredName, enteredEmail, reviewMsg);
  // };

  useEffect(() => {
    if (product) {
      setPreviewImg(product.image01);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const relatedProduct: Product[] = products.filter((item) => product.category === item.category);

  return (
    <Helmet title="Product-details">
      <CommonSection title={product.title} />

      <section>
        <Container>
          <Row>
            <Col lg="2" md="2">
              <div className="product__images ">
                <div className="img__item mb-3" onClick={() => setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className="w-50" />
                </div>
                <div className="img__item mb-3" onClick={() => setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="" className="w-50" />
                </div>

                <div className="img__item" onClick={() => setPreviewImg(product.image03)}>
                  <img src={product.image03} alt="" className="w-50" />
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="product__main-img">
                <img src={previewImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{product.title}</h2>
                <p className="product__price">
                  {" "}
                  Price: <span>${product.price}</span>
                </p>
                <p className="category mb-5">
                  Category: <span>{product.category}</span>
                </p>

                <button onClick={addItem} className="addTOCart__btn">
                  Add to Cart
                </button>
              </div>
            </Col>

            <Col lg="12">
              <div className="tabs d-flex align-items-center gap-5 py-3">
                <h6 className={` ${tab === "desc" ? "tab__active" : ""}`} onClick={() => setTab("desc")}>
                  Description
                </h6>
                <h6 className={` ${tab === "rev" ? "tab__active" : ""}`} onClick={() => setTab("rev")}>
                  Review
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content">
                  <p>{product.desc}</p>
                </div>
              ) : (
                <div className="tab__form mb-3">
                  {/* Review Form */}
                </div>
              )}
            </Col>

            <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Productdetails;
