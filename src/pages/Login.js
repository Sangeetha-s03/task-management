import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successfullysubmitted, setOutput] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!input || !password) {
      setError('All fields are required.');
      return false;
    }

    setError('');
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailPattern.test(input)) {
        setOutput(`Email: ${input}`);
      } else {
        setOutput(`Username: ${input}`);
      }

      console.log({ input, password });
      console.log('Password:', password);
      setError('');
      setOutput(true);
    }
  };

  const handleReset = () => {
    setInput('');
    setPassword('');
    setError('');
    setOutput('');
  };

  return (
    <Container className="mt-5" style={{ maxWidth: '500px' }}>
      <h2 className="text-center mb-4">Login</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      {successfullysubmitted && <Alert variant="success"> submitted successfully!</Alert>}
      <Form onSubmit={handleSubmit}>
        <Col className="justify-content-md-center">

          <Row>
            <Form.Group as={Row} controlId="Login-page-Input" className="mb-3">
              <Form.Label column xs={4} className="text-right">Username:</Form.Label>
              <Col xs={5}>
                <Form.Control
                  type="text"
                  value={input}
                  placeholder='enter your username or email'
                  onChange={(e) => setInput(e.target.value)} />
              </Col>
            </Form.Group>
          </Row>
          
          <Row>
            <Form.Group as={Row} controlId="Login-page-Password" className="mb-3">
              <Form.Label column xs={4} className="text-right">Password:</Form.Label>
              <Col xs={5}>
                <Form.Control
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </Col>
            </Form.Group>
          </Row>



        </Col>
        <Row>
          <Col sm={6} className="d-flex justify-content-center"><Button variant="primary" type="submit">Submit</Button></Col>
          <Col sm={6}><Button variant="secondary" type="reset" onClick={handleReset}>Reset</Button></Col>
        </Row>

        <h6>Don't have an account? Create one <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => navigate('/signup')}> here</span></h6>



      </Form>
    </Container>
  );
}

export default LoginPage;



