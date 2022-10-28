import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../shared/Flash";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import profilebackground from '../images/profilebackground.png'

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
              width: 40%;
              margin: 0 auto;
              max-width: unset;
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
          .welcome {
            text-align: center;
          }
          .img {
            position: relative;
            right: 10vw;
            top: 8vw;
          }
          .width {
            width: 50vw
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
                <Container>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="loginEmail">
                      <div className="welcome">
                        <h1>Welcome Back!</h1>
                      </div>
                      <Form.Label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                      </Form.Label>
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
                      <Form.Label>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-lock" viewBox="0 0 16 16">
                          <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z"/>
                          <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                        </svg>
                      </Form.Label>
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
                        >
                          <a href="#" class="link-success">
                            Forgot Password?
                          </a>
                        </Link>
                      </Col>
                    </Row>
                    <Row>                  
                      <Button type="submit" variant="outline-success">
                        Login
                      </Button>
                    </Row>
                  </Form>
                </Container>
              </Col>
            </Row>
          </Container>
          <Row className="register">
            <p>
              Don't have an account?&nbsp;
              <Link to="/register">
                <a href="#" class="link-success">
                  Register
                </a>
              </Link>
            </p>
          </Row>
        </Col>
        <Col md='4'>
          <Image className= 'img'
            width='500px'
            src={ profilebackground } 
          />
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