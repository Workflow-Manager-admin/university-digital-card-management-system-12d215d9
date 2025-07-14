import React, { useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import { useToast } from "../components/ToastProvider";
import "./Login.css";

// PUBLIC_INTERFACE
function Login({ onLogin }) {
  const [step, setStep] = useState(1); // 1=email, 2=otp
  const [email, setEmail] = useState("");
  const [sentOTP, setSentOTP] = useState("");
  const [enteredOTP, setEnteredOTP] = useState("");
  const [otpExpired, setOTPExpired] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(120); // 2 min

  const toast = useToast();

  // Simulate sending OTP
  const handleSendOTP = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSentOTP("4321"); // fixed for demo
      setStep(2);
      setOtpCountdown(120);
      setOTPExpired(false);
      toast(`OTP sent to ${email}. (4321)`, "info");
    }, 850);
  };

  const handleVerify = (e) => {
    e.preventDefault();
    if (otpExpired) {
      toast("OTP expired. Please resend.", "error");
      return;
    }
    if (enteredOTP === sentOTP) {
      toast("Authentication successful!", "success");
      onLogin && onLogin(email);
    } else {
      toast("Invalid OTP. Please try again.", "error");
    }
  };

  return (
    <section className="login-section">
      <form
        aria-label="login form"
        className="login-form"
        onSubmit={step === 1 ? handleSendOTP : handleVerify}
      >
        <h1 className="login-title">Admin Login</h1>
        {step === 1 && (
          <>
            <label htmlFor="admin-email" className="login-label">
              Email
              <input
                required
                type="email"
                id="admin-email"
                placeholder="admin@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                autoComplete="username"
                aria-required="true"
                aria-label="Enter your email"
              />
            </label>
            <button
              type="submit"
              className="login-btn"
              disabled={loading || !email}
              aria-busy={loading}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <label htmlFor="admin-otp" className="login-label">
              OTP (One-Time Password)
              <input
                required
                type="text"
                id="admin-otp"
                inputMode="numeric"
                pattern="[0-9]{4,6}"
                placeholder="Enter OTP"
                value={enteredOTP}
                onChange={(e) => setEnteredOTP(e.target.value)}
                className="login-input"
                autoComplete="one-time-code"
                aria-required="true"
                aria-label="Enter the OTP"
                maxLength={6}
              />
            </label>
            <div className="login-otp-row">
              <span className="login-timer">
                Expires in <CountdownTimer seconds={otpCountdown} onExpire={() => setOTPExpired(true)} />
              </span>
              {otpExpired && (
                <button type="button" className="login-btn-ghost" onClick={handleSendOTP}>
                  Resend OTP
                </button>
              )}
            </div>
            <button type="submit" className="login-btn" disabled={loading} aria-busy={loading}>
              {loading ? "Validating..." : "Verify & Sign in"}
            </button>
            <button
              type="button"
              className="login-btn-ghost"
              style={{ marginTop: "8px" }}
              onClick={() => setStep(1)}
            >
              Back
            </button>
          </>
        )}
      </form>
    </section>
  );
}

export default Login;
