import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SignUp.module.css'; // Import CSS Module
import logo from '../../assets/logo.png';
import googleLogo from '../../assets/google-logo.png';

function SignUp() {
    console.log(styles)
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
          type="submit"
          className={styles.submitSignInSignUp}
        >
          Sign In
        </Button>
      </div>

      {/* Right Panel */}
      <div className={styles.signInBox}>
        <Form.Label className={styles.titleSignIn}>Sign Up</Form.Label>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              className={styles.inputSignin}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className={styles.inputSignin}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              className={styles.inputSignin}
            />
          </Form.Group>
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

          {/* Separator */}
          <div className={styles.separator}>
            <div className={styles.line}></div>
            <span className={styles.separatorText}>Access Quickly</span>
            <div className={styles.line}></div>
          </div>

          {/* Google Button */}
          <Button
            variant="primary"
            type="submit"
            className={styles.googleButton}
          >
            <img
              src={googleLogo}
              alt="Google Logo"
              className={styles.googleLogo}
            />
            Continue with Google
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
