import { AuthConsumer } from "../../providers/AuthProvider";
import { useState } from "react";
import Flash from "../shared/Flash";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileBackground from '../images/ProfileBackground.png'

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
              width: 40%;
              margin: 0 auto;
              max-width: unset;
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
          .link-* {
            :hover :focus
        }
        .welcome {
          text-align: center;
        }
        .img {
          position: relative;
          right: 10vw;
          top: 9vw;
        }
      `}
      </style>
        <Row>
           <Col>
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
      <Container>
      <Form onSubmit={handleSubmit}>
          <Form.Group className="registerName">
              <div className="welcome">
                    <h1>Welcome!</h1>
                    <h5>Sign up to create an account</h5>
                </div>
              <Form.Label>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg>
                  </Form.Label>
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
                        <Form.Label><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mailbox" viewBox="0 0 16 16">
  <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
  <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
</svg></Form.Label>
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
                        <Form.Label><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-lock" viewBox="0 0 16 16">
  <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg></Form.Label>
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
                        <Form.Label><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-lock" viewBox="0 0 16 16">
  <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1zm2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224zM6.105 8.125A.637.637 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.637.637 0 0 1 9.5 11h-3a.637.637 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg></Form.Label>
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
                                  color="success"
                                  />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Button variant="outline-success"type="submit">
                          Register
                        </Button>
                    </Row>
                </Form>
                </Container>
              </Col>
              </Row>
          </Container>
                    <Row className="login">
                        <p>
                          Already have an account?&nbsp;
                          <Link to="/login"><a href="#" class="link-success">
                              Login</a>
                          </Link>
                        </p>
                        
                    </Row>
                </Col>
                <Col md='4'>
            <Image className= 'img'
                width='500px'
                src={ ProfileBackground } 
              />
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
