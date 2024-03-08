import React, { useState} from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";
import Pay from "../chapa/Pay";


// interface UserShippingAddress {
//   name: string;
//   email: string;
//   phone: string;
//   country: string;
//   city: string;
//   postalCode: string;
// }

const Checkout: React.FC = () => {
  const [enterFname, setEnterFname] = useState<string>("");
  const [enterLname, setEnterLname] = useState<string>("");
  const [enterEmail, setEnterEmail] = useState<string>("");
  // const [enterNumber, setEnterNumber] = useState<string>("");
  // const [enterCountry, setEnterCountry] = useState<string>("");
  // const [enterCity, setEnterCity] = useState<string>("");
  // const [postalCode, setPostalCode] = useState<string>("");
  

  const cartTotalAmount: number = useSelector((state: any) => state.cart.totalAmount);
  const shippingCost: number = 30;

  const totalAmount: number = cartTotalAmount + Number(shippingCost);
  const public_key='CHAPUBK_TEST-pq7xpwyUzlAzob7nwfab9JYvtehAUde6';
  const rn = Math.floor(Math.random()
* (9856237 - 1 + 1)) + 34534;
const tx_ref=rn.toString();
 

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              <form className="checkout__form"
              //  onSubmit={submitHandler}
               >
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your Fname"
                    required
                    onChange={(e) => setEnterFname(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your Lname"
                    required
                    onChange={(e) => setEnterLname(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    // onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    // onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    // onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    // onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <Pay fname={enterFname} lname={enterLname} email={enterEmail} amount={totalAmount} tx_ref={tx_ref} publickey={public_key}/>

                {/* <button type="submit" className="addTOCart__btn"
                onClick={clicked}
                >
                  Payment
                </button> */}
              </form>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>Br.{cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>Br.{shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>Br.{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
