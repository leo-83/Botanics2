import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../shared/Flash";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = ({ handleRegister, errors, setErrors }) => {
  const [user, setUser] = useState({ name: '', email: '', password: '', passwordConfirmation: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.password === user.passwordConfirmation) {
      handleRegister(user)
    } else {
      alert('Password do not match')
    }
  }

  return (
    <>
    <style type="text/css">
      {`
          .registerShow {
              text-align: right;
              padding-right: 5%;
          }
          .registerForm {
              width: 80%;
              padding: 10% 0% 10% 0%;
          }
          .registerEmail {
              padding: 5% 0% 5% 0%;
          }
          .registerPassword {
              padding-bottom: 5%;
          }
          .registerPasswordConfirmation {
              padding-bottom: 5%;
          }
          .registerRemember {
              padding-bottom: 15%;
          }
          .login {
              text-align: center;
          }
      `}
      </style>
      <Row>
      <Col>
        <Row>
          <p className="registerShow">
            Login
          </p>
        </Row>
        <Container className="registerForm">

    { errors ?
        <Flash
          variant={errors.variant}
          msg={errors.msg}
          setErrors={setErrors}
        />
      : null
      }
      <Row>
        <Col>
          <h1>Welcome!</h1>
           <h3>Please sign up to create an account</h3>
          </Col>
          <Col />
        </Row>
      <Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="registerName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control 
                          type="name"
                          name="name"
                          value={user.name}
                          onChange={ (e) => setUser({ ...user, name: e.target.value })}
                          required
                          placeholder="Name"
                        />
                    </Form.Group>
                    <Form.Group className="registerEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                          type="email"
                          name="email"
                          value={user.email}
                          onChange={ (e) => setUser({ ...user, email: e.target.value })}
                          required
                          placeholder="Email"
                        />
                    </Form.Group>
                    <Form.Group className="registerPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                          type="password"
                          name="password"
                          value={user.password}
                          onChange={ (e) => setUser({ ...user, password: e.target.value })}
                          required
                          placeholder="Password"
                        />
                    </Form.Group>
                    <Form.Group className="registerPasswordConfirmation">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control 
                          type="password"
                          name="passwordConfirmation"
                          value={user.passwordConfirmation}
                          onChange={ (e) => setUser({ ...user, passwordConfirmation: e.target.value })}
                          required
                          placeholder="Password Confirmation"
                        />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="registerRemember">
                                <Form.Check 
                                  type="checkbox"
                                  label="Remember me"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Button type="submit">
                          Register
                        </Button>
                    </Row>
                </Form>
              </Row>
          </Container>
                    <Row className="login">
                        <p>
                          Already have an account?&nbsp;
                          <Link to="/login">
                              Login
                          </Link>
                        </p>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

const ConnectedRegister = (props) => (
  <AuthConsumer>
    { value => <Register {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedRegister;
