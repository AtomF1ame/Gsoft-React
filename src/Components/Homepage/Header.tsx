import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';

interface User {
  username: string;
  email: string;
}

export const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const updateUser = () => {
      const updatedUser = localStorage.getItem('user');
      if (updatedUser) {
        setUser(JSON.parse(updatedUser));
      }
    };

    // Listen for both login and registration events
    window.addEventListener('userLoggedIn', updateUser);
    window.addEventListener('userRegistered', updateUser);

    return () => {
      window.removeEventListener('userLoggedIn', updateUser);
      window.removeEventListener('userRegistered', updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <header className="header">
      <div className="header-left">
        {user ? (
          <>
            <span className="username">{user.username}</span>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={handleLogin} className="login-button">
              Login
            </button>
            <button onClick={handleRegister} className="register-button">
              Register
            </button>
          </>
        )}
      </div>
      <a href="/"><div className="header-right">
        <span>Toni</span>
      </div></a> 
    </header>
  );
};

export default Header;
