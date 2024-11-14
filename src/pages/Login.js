import React, { useState } from 'react';  
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import logo from '../assets/madera.jpeg'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo electrónico:', email);
    console.log('Contraseña:', password);
  };

  return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <div className="login-box">
            <div className="position-relative">
              <img src={logo} alt="Logo" className="login-logo" />
              <h3 className="session-title">
                <span className="iniciar-text">Iniciar</span> Sesión
              </h3>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail">
                <Form.Label className="block-label">Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-input"
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label className="block-label">Contraseña</Form.Label>
                <Form.Control
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="rounded-input"
                />
                <Form.Check
                  type="checkbox"
                  label="Mostrar contraseña"
                  checked={showPassword}
                  onChange={(e) => setShowPassword(e.target.checked)}
                  className='mostrar'
                />
              </Form.Group>
              <Button variant="success" type="submit" className="w-100 mt-3 rounded-input ingresar">
                Ingresar
              </Button>
              <div className="text-center mt-1 formulario">
                <small>Acceso a formulario</small>
              </div>

              <Button variant="success" className="w-100 mt-3 rounded-input invitado">
                Modo invitado
              </Button>
              <div className="text-center mt-1 calculadora">
                <small>Acceso únicamente a calculadora</small>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
