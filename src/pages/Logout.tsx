import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firbase/firebasesetup';
import { Container, Row, Col } from "reactstrap";
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/common-section/CommonSection';
import {firestore } from '../firbase/firebasesetup';
import { doc, getDoc } from "firebase/firestore";
const Logout: React.FC = () => {
  const navigate = useNavigate();
  const [username,setUsername]=useState('');

  
    const signOutUser = async () => {
      try {
        await auth.signOut();
 
        navigate('/');
      } catch (error) {
        console.error( error);
      
      }
    };

    useEffect(() => {
      const fetchUserData = async () => {
        try {
         
          if (auth.currentUser) {
            const userUid = auth.currentUser.uid;
  
        
            const userDocRef = doc(firestore, "user", userUid);
  
            // Fetch the document
            const userDocSnapshot = await getDoc(userDocRef);
  
            if (userDocSnapshot.exists()) {
              // Document exists, retrieve data
              setUsername(userDocSnapshot.data().Name);
              console.log(userDocSnapshot);
            } else {
              // Document doesn't exist
              console.error("User document not found");
            }
          } else {
            // No current user
            console.error("No current user");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };
  
      fetchUserData();
    });

 
  return (
<Helmet title="Account">
      <CommonSection title="Account" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <h1>Hi {username} 👋👋👋</h1>
              <button className="addTOCart__btn" onClick={signOutUser}
              >Logout</button>
         
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Logout;
