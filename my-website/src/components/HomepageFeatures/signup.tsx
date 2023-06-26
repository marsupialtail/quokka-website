import React, { useState } from 'react';

const SignupForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email to Cloudflare Worker
    fetch('https://vivcxetohwncxos36rzy4xr5yq0biado.lambda-url.us-west-2.on.aws/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "email": email }),
    })
      .then((response) => {
        if (response.ok) {
          // console.log('Email successfully sent to google sheets');
          // Add any success logic here
        } else {
          // console.error('Error sending email to google sheets');
          // Add any error handling logic here
        }
      })
      .catch((error) => {
        // console.error('Error sending email to google sheets:', error);
        // Add any error handling logic here
      });

    setEmail('');
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={handleChange} required />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;
