import React from 'react';

type PrettyInputProps = {
  isLarge: boolean;
};

const PrettyInput = ({ isLarge }: PrettyInputProps) => (
  <div
    style={{
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      width: isLarge ? '300px' : '100px',
    }}
  >
    <input type='text' style={{ width: '100%' }} />
  </div>
);

export default PrettyInput;
