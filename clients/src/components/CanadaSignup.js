import React, { useState } from 'react';
import axios from 'axios';

function CanadaSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const signup = () => {
    axios.post('http://localhost:8080/signup/ca', {
      username: username,
      password: password,
      email: email,
    })
    .then(response => {
      console.log(response.data);
      alert("Successfuly added");
      setUsername('');
      setPassword('');
      setEmail('');
      // Handle success or show a success message
    })
    .catch(error => {
      console.error(error);
      // Handle error or show an error message
    });
  };

  return (
    <div>
      <h1>Sign Up (Canada)</h1>
      <form>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button type="button" onClick={signup}>Sign Up</button>
      </form>
    </div>
  );
}

export default CanadaSignup;
