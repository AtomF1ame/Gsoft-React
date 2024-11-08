import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.scss';

export const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const user = { username, email };
    localStorage.setItem('user', JSON.stringify(user));

    // Dispatch custom event to update Header
    window.dispatchEvent(new Event('userRegistered'));

    // Automatically log the user in and navigate to the homepage
    navigate('/');
  };

  return (
    <div className="main">
      <h1 className="h1">Register</h1>
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="email">Email:</label>
        <input
          className="input"
          placeholder="Enter your Email."
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="label" htmlFor="username">Username:</label>
        <input
          className="input"
          placeholder="Enter your Username."
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label className="label" htmlFor="password">Password:</label>
        <input
          className="input"
          placeholder="Enter your Password."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label className="label" htmlFor="repeatPassword">Repeat Password:</label>
        <input
          className="input"
          placeholder="Repeat your Password."
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <button className="button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
