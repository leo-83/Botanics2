import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../shared/Flash";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = ({ handleLogin, errors, setErrors  }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    handleLogin(user)
  }

  return (
    <>
    <style type="text/css">
      {`
          .loginShow {
              text-align: right;
              padding-right: 5%;
          }
          .loginForm {
              width: 20%;
              padding: 10% 0% 10% 0%;
          }
          .loginEmail {
              padding: 5% 0% 5% 0%;
          }
          .loginPassword {
              padding-bottom: 5%;
          }
          .loginRemember {
              padding-bottom: 15%;
          }
          .forgotPasswordText {
              color: gray;
          }
          .register {
              text-align: center;
          }
          .link-* {
              :hover :focus
          }
      `}
  </style>
  <Row>
      <Col>
        <Container className="loginForm">

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
              <h1>Welcome Back!</h1> 
              <h3>Please Login To Access Your Botanics Account</h3>
              </Col>
              <Col />
              </Row>
              <Row>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="loginEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            value={user.email}
                            onChange={ (e) => setUser({ ...user, email: e.target.value })}
                            required
                            placeholder="Email"
                        />
                    </Form.Group>
                    <Form.Group className="loginPassword">
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
                    <Row>
                        <Col>
                            <Form.Group className="loginRemember">
                                <Form.Check 
                                    type="checkbox"
                                    label="Remember me"
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Link
                                className="forgotPasswordText"
                            ><a href="#" class="link-success">
                                Forgot Password?</a>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                    <Button variant="outline-success">
                        Login
                      </Button>
                    </Row>
                </Form>
              </Row>
          </Container>
          
                    <Row className="register">
                            <p>
                                Don't have an account?&nbsp;
                                <Link to="/register"><a href="#" class="link-success">
                                    Register</a>
                                </Link>
                            </p>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
    { value => <Login {...props} {...value} /> }
  </AuthConsumer>
)

export default ConnectedLogin;

// export default Login