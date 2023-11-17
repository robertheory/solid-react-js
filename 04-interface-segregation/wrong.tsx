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
    avatar: string;
    description: string;
  };
};

const Avatar = ({ user }: SimpleCardProps) => (
  <div
    style={{
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '50%',
      padding: '10px',
      width: '100px',
    }}
  >
    <img src={user.avatar} alt='description' />
  </div>
);

const SimpleCard = ({ user }: SimpleCardProps) => {
  return (
    <div>
      <h2>{user.fullName}</h2>
      <Avatar user={user} />
      <p>{user.description}</p>
    </div>
  );
};

export default SimpleCard;
