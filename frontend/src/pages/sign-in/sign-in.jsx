import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './SignIn.module.css'; // Import CSS Module
import logo from '../../assets/logo.png';
import googleLogo from '../../assets/google-logo.png';
import { useNavigate } from 'react-router-dom';


function SignIn() {

  const navigate = useNavigate();
  
const handleSumbit = () => {
  navigate('/myFeed');
};
const handleSignUp = () =>{
  navigate('/signUp')
}
  return (
    <div className={styles.signInContainer}>
      <div className={styles.signInBox}>
        <Form.Label className={styles.titleSignIn}>Sign In</Form.Label>
        <Button variant="primary" type="submit" className={styles.googleButton} >
          <img src={googleLogo} alt="Google Logo" className={styles.googleLogo} />
          Continue with Google
        </Button>
        <div className={styles.separator}>
          <div className={styles.line}></div>
          <span className={styles.separatorText}>or continue with Email</span>
          <div className={styles.line}></div>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" className={styles.inputSignin} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" className={styles.inputSignin} />
          </Form.Group>
          <Button variant="primary" type="submit" className={styles.submitSignIn} onClick={handleSumbit}>
            Submit
          </Button>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" className={styles.checkboxSignIn} />
          </Form.Group>
        </Form>
      </div>
      <div className={styles.squareContainer}>
        <img src={logo} alt="Eventy Logo" className={styles.squareImage} />
        <span className={styles.squareContainerDontHave}>Don't have an account?</span>
        <Button variant="primary" type="submit" className={styles.submitSignInSignUp} onClick={handleSignUp}>
          Sign up
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
