import React, { useState } from 'react';
import './Login.scss';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const validateLogin = (username: string, password: string) => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((user: { username: string; password: string }) =>
      user.username === username && user.password === password
    );
    return user;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const user = validateLogin(username, password);
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));

      // Dispatch the custom event
      window.dispatchEvent(new Event('userLoggedIn'));

      setErrorMessage('');
      navigate('/welcome');
    } else {
      setErrorMessage('Invalid username or password.');
    }
  };

  return (
    <div className="main">
      <h1 className="h1">Login</h1>
      <h3>Enter your login credentials</h3>

      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="username">Username:</label>
        <input
          className="input"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="label" htmlFor="password">Password:</label>
        <input
          className="input"
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="wrap">
          <button className="button" type="submit">Submit</button>
        </div>
      </form>

      <p>
        Not registered?{' '}
        <a href="/register" style={{ textDecoration: 'none' }}>
          Create an account
        </a>
      </p>
    </div>
  );
};

export default Login;
