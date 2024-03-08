import React, { useRef, FormEvent } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { auth ,firestore } from "../firbase/firebasesetup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const signupNameRef = useRef<HTMLInputElement>(null);
  const signupPasswordRef = useRef<HTMLInputElement>(null);
  const signupEmailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    if (signupNameRef.current && signupEmailRef.current && signupPasswordRef.current) {
      const name = signupNameRef.current.value;
      const email = signupEmailRef.current.value;
      const password = signupPasswordRef.current.value;

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);

        if (userCredential) {
         
          await firestore.collection("user").doc(userCredential.user?.uid).set({
           Name: name,
           Email: email,
           uid:userCredential.user.uid
            
          });
          console.log('User created successfully:', userCredential.user);
          navigate(-1);
         
        } else {
       
          console.error('User registration failed');
        }
      } catch (error) {
        console.error(error);
        // Handle error
      }
    }
  };
  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
