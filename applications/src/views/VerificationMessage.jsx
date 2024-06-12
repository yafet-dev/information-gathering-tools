import React from "react";
import styles from "./VerificationMessage.module.css";

const VerificationMessage = () => {
  const handleLoginRedirect = () => {
    history.push("/login");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Verification Email Sent</h1>
      <p className={styles.message}>
        We've successfully sent a verification email to your address. Please
        check your inbox and follow the instructions to verify your email.
      </p>
      <button className={styles.button} onClick={handleLoginRedirect}>
        Go to Login
      </button>
    </div>
  );
};

export default VerificationMessage;
