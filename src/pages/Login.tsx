import React, { useRef, FormEvent } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { auth } from "../firbase/firebasesetup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const loginNameRef = useRef<HTMLInputElement>(null);
  const loginPasswordRef = useRef<HTMLInputElement>(null);
  const navigate=useNavigate();
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (loginNameRef.current && loginPasswordRef.current) {
      const email = loginNameRef.current.value;
      const password = loginPasswordRef.current.value;

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);

        if (userCredential) {
          console.log('User signed in successfully:', userCredential.user);
          navigate(-1);
          // Perform any additional actions after successful sign-in
        } else {
          // Handle sign-in failure
          console.error('Authentication failed');
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }
  };



  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
