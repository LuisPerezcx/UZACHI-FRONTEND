
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LoginForm } from '../components/Login/LoginForm';  
import { Footer } from '../components/Footer';

export const Login = () => {
  return (
    <>
      <LoginForm></LoginForm>  
      <Footer></Footer>
    </>
  );
};

