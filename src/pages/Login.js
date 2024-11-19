
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/Login/LoginForm';  // Importa LoginForm
import Footer from '../components/Footer';

const Login = () => {
  return (
    <>
      <Container className="login-container">
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <div className="login-box">
              <LoginForm></LoginForm>  
            </div>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>  
    </>
  );
};

export default Login;
