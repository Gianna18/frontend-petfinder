import React, { useState } from 'react';
import "./SignUp.css";

function SignUp() {
  // Define state variables for form inputs and error messages
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Validate form inputs
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Submit form data to server
    const formData = { username, email, password };
    // TODO: Submit formData to server using fetch or axios

    // Clear form inputs
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  }

  // Render sign-up form
  return (
    <div className="login--container">
    <form onSubmit={handleSubmit}>
      {error && <p className="error">{error}</p>}
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
    </div>
  );
}

export default SignUp;