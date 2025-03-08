/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./../Login/App.css"

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Remember Me:', rememberMe);
  };

  return (
    <>
    <div className="login-content">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-heading"> <h1>Welcome Back!</h1>
        <p>Don't have an account?
           <NavLink to="/signup" activeClassNAme = "active" >Sign up</NavLink>
            </p></div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="remember-me">
          <input
            type="checkbox"
            id="remember-me"
            name="remember"
            checked={rememberMe}
            onChange={handleRememberMeChange}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="submit" className="sign-in-btn">
          Sign In
        </button>

        <div className="forgot-password">
          <a href="#">Forgot your password?</a>
        </div>
      </form>
    </div>
    </div>

    </>
  );
};

export default LoginPage;



