import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';


function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);



  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log({ name, email, password, confirmPassword });
      setSuccess(true);
    }
  };


  const validateForm = () => {
    if (!name || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return false;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    setError('');
    return true;
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSuccess(false);
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '700px' }}>
      <h2 className="text-center mb-4">Sign Up</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Form submitted successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Col className="justify-content-md-center">
          <Row>
            <Form.Group as={Row} controlId="Sign_Up_Name" className="mb-3">
              <Form.Label column xs={4} className="text-right">Name</Form.Label>
              <Col xs={5}>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)} />
              </Col>
            </Form.Group>
          </Row>
          <Row >
            <Form.Group as={Row} controlId="Sign_Up_Email" className="mb-3">
              <Form.Label column xs={4} className="text-left">Email</Form.Label>
              <Col xs={5}>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </Col>
            </Form.Group>
          </Row>
          <Row >
            <Form.Group as={Row} controlId="Sign_Up_Password" className="mb-3">
              <Form.Label column xs={4} className="text-left">Password</Form.Label>
              <Col xs={5}>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </Col>
            </Form.Group>
          </Row>
          <Row >
            <Form.Group as={Row} controlId="Sign_Up_ConfirmPassword" className="mb-3">
              <Form.Label column xs={4} className="text-left">Confirm Password</Form.Label>
              <Col xs={5}>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} />
              </Col>
            </Form.Group>
          </Row>
        </Col>
        <Row>
          <Col sm={6} className="d-flex justify-content-center">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col sm={6}>
            <Button variant="secondary" type="reset" onClick={handleReset}>
              Reset
            </Button>

          </Col>




        </Row>


      </Form>
    </Container>

  );
};


export default SignUp;