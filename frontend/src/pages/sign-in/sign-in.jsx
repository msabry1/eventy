import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { login } from "../../services/authService";
import styles from "./SignIn.module.css"; // Import CSS Module

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // For error handling

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    try {
      const success = await login(formData.email, formData.password);
      if (success) {
        navigate('/'); // redirect to protected route
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };
  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <div className={styles.signInContainer}>
      <div className={styles.signInBox}>
        <Form.Label className={styles.titleSignIn}>Sign In</Form.Label>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              className={styles.inputSignin}
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              className={styles.inputSignin}
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          {error && <p className={styles.errorText}>{error}</p>}{" "}
          {/* Display error */}
          <Button
            variant="primary"
            type="submit"
            className={styles.submitSignIn}
          >
            Submit
          </Button>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Remember me"
              className={styles.checkboxSignIn}
            />
          </Form.Group>
        </Form>
      </div>
      <div className={styles.squareContainer}>
        <img src={logo} alt="Eventy Logo" className={styles.squareImage} />
        <span className={styles.squareContainerDontHave}>
          Don't have an account?
        </span>
        <Button
          variant="primary"
          type="button"
          className={styles.submitSignInSignUp}
          onClick={handleSignUp}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
