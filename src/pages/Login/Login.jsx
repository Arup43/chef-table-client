import { useContext, useState } from "react";
import "./Login.css";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  const handleGithubLogin = () => {
    loginWithGithub()
      .then((result) => {
        navigate(from, { replace: true });
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container className="w-25 mx-auto mb-5 pb-5 mt-5 pt-5">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Text className="text-danger">{error}</Form.Text> <br />
        <Button variant="danger" type="submit">
          Login
        </Button>
        <br />
        <br />
        <h5>Or sign-in with</h5>
        <Button onClick={handleGoogleLogin} className="me-3 btn btn-danger">
          <FaGoogle></FaGoogle>
        </Button>
        <Button onClick={handleGithubLogin} className="btn btn-danger">
          <FaGithub></FaGithub>
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
