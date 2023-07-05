import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your signup logic here
    console.log('User signed up with email:', email);
    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {/* Email */}
        <input type="email" value={email} onChange={handleChange} required placeholder="Email"/>
      </label>
      <button type="submit">Join the waitlist</button>
    </form>
  );
};

export default SignupForm;