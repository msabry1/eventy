import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SignUp.module.css';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/authService';

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSignIn = () => {
    navigate("/signIn");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.username || !formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Password validation - at least 6 characters
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      await register(formData.username, formData.password, formData.email);
      // If registration is successful, navigate to sign in
      navigate('/signIn');
    } catch (err) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className={styles.signInContainer}>
      {/* Left Panel */}
      <div className={styles.squareContainer}>
        <img src={logo} alt="Eventy Logo" className={styles.squareImage} />
        <span className={styles.squareContainerDontHave}>
          Already have an account?
        </span>
        <Button
          variant="primary"
          type="button"
          className={styles.submitSignInSignUp}
          onClick={handleSignIn}
        >
          Sign In
        </Button>
      </div>

      {/* Right Panel */}
      <div className={styles.signInBox}>
        <Form.Label className={styles.titleSignIn}>Sign Up</Form.Label>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter username"
              className={styles.inputSignin}
              value={formData.username}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
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
          {error && <p className={styles.errorText}>{error}</p>}
          <Button
            variant="primary"
            type="submit"
            className={styles.submitSignIn}
          >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;