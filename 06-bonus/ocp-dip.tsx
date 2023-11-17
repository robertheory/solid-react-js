import React from 'react';

type SimpleSimpleFormProps = {
  onSubmit: (event) => void;
  children: React.ReactNode;
};

const SimpleSimpleForm = ({ onSubmit, children }: SimpleSimpleFormProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}

      <button type='submit'>Login</button>
    </form>
  );
};

export const App = () => {
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;

    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password }),
    });

    await response.json();
  };

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const passwordConfirmation = event.currentTarget.passwordConfirmation.value;
    const email = event.currentTarget.email.value;

    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, passwordConfirmation, username }),
    });

    await response.json();
  };

  return (
    <>
      <h1>Login With Provider 1</h1>
      <SimpleSimpleForm onSubmit={handleLogin}>
        <input type='text' placeholder='Username' name='username' />
        <input type='password' placeholder='Password' name='password' />
      </SimpleSimpleForm>

      <h1>Register Form</h1>
      <SimpleSimpleForm onSubmit={handleRegister}>
        <input type='text' placeholder='Username' name='username' />
        <input type='password' placeholder='Password' name='password' />
        <input
          type='passwordConfirmation'
          placeholder='Confirm Password'
          name='confirm'
        />
        <input type='text' placeholder='Email' name='email' />
      </SimpleSimpleForm>
    </>
  );
};
