import React from 'react';

type SimpleSimpleFormProps = {
  onSubmit: (username: string, password: string) => void;
};

const SimpleSimpleForm = ({ onSubmit }: SimpleSimpleFormProps) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type='submit'>Login</button>
    </form>
  );
};

export const App = () => {
  const [user, setUser] = React.useState<null | unknown>(null);

  const handleLoginWithRestAPI = async (username: string, password: string) => {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: username, password }),
    });

    const data = await response.json();

    setUser(data);
  };

  const handleLoginWithGraphQL = async (username: string, password: string) => {
    const response = await fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          mutation {
            login(email: "${username}", password: "${password}") {
              id
              email
            }
          }
        `,
      }),
    });

    const data = await response.json();

    setUser(data);
  };

  return (
    <>
      <h1>Login With Provider 1</h1>
      <SimpleSimpleForm onSubmit={handleLoginWithRestAPI} />

      <h1>Login With Provider 2</h1>
      <SimpleSimpleForm onSubmit={handleLoginWithGraphQL} />

      <h1>User</h1>
      <pre>{JSON.stringify(user, null, 4)}</pre>
    </>
  );
};
