import React from 'react';

type SimpleCardProps = {
  user: {
    fullName: string;
    firstName: string;
    lastName: string;
    state: string;
    country: string;
    cellphone: string;
    email: string;
    avatarUrl: string;
    description: string;
  };
};

const Avatar = ({ avatarUrl }: { avatarUrl: string }) => (
  <div
    style={{
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '50%',
      padding: '10px',
      width: '100px',
    }}
  >
    <img src={avatarUrl} alt='description' />
  </div>
);

const SimpleCard = ({ user }: SimpleCardProps) => {
  return (
    <div>
      <h2>{user.fullName}</h2>
      <Avatar avatarUrl={user.avatarUrl} />
      <p>{user.description}</p>
    </div>
  );
};

export default SimpleCard;
