import React from 'react';

type ButtonProps = {
  text: string;
  icon: string;
  color: string;
};

const ButtonWithIconExtended = ({ color, icon, text }: ButtonProps) => {
  const buttonStyles = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <>
      <button style={buttonStyles}>{text}</button>
      <i className='material-icons'>{icon}</i>
    </>
  );
};

export const App = () => {
  return (
    <div>
      <ButtonWithIconExtended color='green' icon='add' text='Add' />
      <ButtonWithIconExtended color='red' icon='delete' text='Delete' />
      <ButtonWithIconExtended color='blue' icon='edit' text='Edit' />
    </div>
  );
};
