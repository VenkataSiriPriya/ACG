import React, { useState } from 'react';
import './ForgotPassword.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: enter email, 2: enter OTP, 3: reset password
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [redirectPath, setRedirectPath] = useState('');

  const handleRequestOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://backend-acg.onrender.com/api/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() })
      });
      const data = await res.json();
      if (res.ok) {
        setModalMessage('OTP has been sent to your email!');
        setShowModal(true);
        setRedirectPath('');
        setStep(2); // ✅ Move to OTP step
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Server error. Please try again.');
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://backend-acg.onrender.com/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), otp: otp.trim() })
      });
      const data = await res.json();
      if (res.ok) {
        setModalMessage('OTP verified! Please set a new password.');
        setShowModal(true);
        setRedirectPath('');
        setStep(3); // ✅ Move to password reset step
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Server error during OTP verification');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('https://backend-acg.onrender.com/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          otp: otp.trim(),
          newPassword
        })
      });
      const data = await res.json();
      if (res.ok) {
        setModalMessage('Password reset successful!');
        setShowModal(true);
        setRedirectPath('/login'); // ✅ Go to login after reset
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert('Server error during password reset');
    }
  };

  const handleModalOk = () => {
    setShowModal(false);
    if (redirectPath) {
      navigate(redirectPath);
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>🔐 Forgot Password</h2>

      {step === 1 && (
        <form onSubmit={handleRequestOTP}>
          <label>Enter your registered email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <button type="submit">Send OTP</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleVerifyOTP}>
          <label>Enter OTP</label>
          <input
            type="text"
            value={otp}
            onChange={e => setOtp(e.target.value)}
            required
            placeholder="Enter the OTP you received"
          />
          <button type="submit">Verify OTP</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleResetPassword}>
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            required
            placeholder="New password"
          />

          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm new password"
          />

          <button type="submit">Reset Password</button>
        </form>
      )}

      {/* ✅ Modal Box */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>✅ Success</h3>
            <p>{modalMessage}</p>
            <button onClick={handleModalOk}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
