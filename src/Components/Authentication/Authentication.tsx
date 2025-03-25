import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Authentication.module.css";

// Define the Authentication component
interface AuthenticationProps {
  onLogin: () => void; // Notify when user logs in successfully
}

const Authentication: React.FC<AuthenticationProps> = ({ onLogin }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [signUpValues, setSignUpValues] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [loginValues, setLoginValues] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  // Handle checkbox toggle for switching between login and sign-up forms
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Handle input changes for sign-up form
  const handleSignUpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpValues({
      ...signUpValues,
      [e.target.name]: e.target.value
    });
  };

  // Sign-Up Submit function (mocked)
  const handleSignUpSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Mock a successful sign-up
    alert("Sign-Up successful!");
    navigate("/home"); // Navigate to home page after successful sign-up
  };

  // Log-In Submit function (mocked)
  const handleLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Mock a successful login
    alert("Login successful!");
    onLogin(); // Notify the parent component that the user is logged in
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className={styles.body}>
      <a
        href="http://localhost:5173/"
        className={styles.logo}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://img.freepik.com/premium-photo/formula-1-car-background-generative-ai_332261-4061.jpg"
          alt="Logo"
        />
      </a>

      <div className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.row} ${styles.fullHeight} ${styles.justifyContentCenter}`}>
            <div className={`${styles.col12} ${styles.textCenter} ${styles.alignSelfCenter} ${styles.py5}`}>
              <div className={`${styles.section} ${styles.pb5} ${styles.pt5} ${styles.ptSm2} ${styles.textCenter}`}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="reg-log"></label>
                <div className={styles.card3dWrap}>
                  <div className={styles.card3dWrapper}>
                    {/* Log In Card */}
                    <div className={styles.cardFront}>
                      <div className={styles.centerWrap}>
                        <div className={styles.section}>
                          <h4 className={styles.mb4}>Log In</h4>
                          <form onSubmit={handleLoginSubmit}>
                            <div className={styles.formGroup}>
                              <input
                                type="email"
                                name="email"
                                value={loginValues.email}
                                onChange={(e) => setLoginValues({ ...loginValues, email: e.target.value })}
                                className={styles.formStyle}
                                placeholder="Your Email"
                                id="logemail"
                                autoComplete="off"
                              />
                              <i className={`${styles.inputIcon} uil uil-at`}></i>
                            </div>
                            <div className={`${styles.formGroup} ${styles.mt2}`}>
                              <input
                                type="password"
                                name="password"
                                value={loginValues.password}
                                onChange={(e) => setLoginValues({ ...loginValues, password: e.target.value })}
                                className={styles.formStyle}
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"
                              />
                              <i className={`${styles.inputIcon} uil uil-lock-alt`}></i>
                            </div>
                            <button type="submit" className={styles.btn}>
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>

                    {/* Sign Up Card */}
                    <div className={styles.cardBack}>
                      <div className={styles.centerWrap}>
                        <div className={styles.section}>
                          <h4 className={styles.mb4}>Sign Up</h4>
                          <form onSubmit={handleSignUpSubmit}>
                            <div className={styles.formGroup}>
                              <input
                                type="text"
                                name="name"
                                value={signUpValues.name}
                                onChange={handleSignUpChange}
                                className={styles.formStyle}
                                placeholder="Your Full Name"
                                id="logname"
                                autoComplete="off"
                              />
                              <i className={`${styles.inputIcon} uil uil-user`}></i>
                            </div>
                            <div className={`${styles.formGroup} ${styles.mt2}`}>
                              <input
                                type="email"
                                name="email"
                                value={signUpValues.email}
                                onChange={handleSignUpChange}
                                className={styles.formStyle}
                                placeholder="Your Email"
                                id="logemail"
                                autoComplete="off"
                              />
                              <i className={`${styles.inputIcon} uil uil-at`}></i>
                            </div>
                            <div className={`${styles.formGroup} ${styles.mt2}`}>
                              <input
                                type="password"
                                name="password"
                                value={signUpValues.password}
                                onChange={handleSignUpChange}
                                className={styles.formStyle}
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"
                              />
                              <i className={`${styles.inputIcon} uil uil-lock-alt`}></i>
                            </div>
                            <button type="submit" className={styles.btn}>
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
