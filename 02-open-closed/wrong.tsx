import React from 'react';

type ButtonProps = {
  type: 'add' | 'remove';
  text: string;
};

const ButtonWithIcon = ({ type, text }: ButtonProps) => {
  const buttonStyles = {
    backgroundColor: type === 'add' ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <>
      <button style={buttonStyles}>{text}</button>
      {type === 'add' && <i className='material-icons'>add</i>}
      {type === 'remove' && <i className='material-icons'>remove</i>}
    </>
  );
};

export default ButtonWithIcon;
