import React from 'react';

interface PrettyInputProps extends React.HTMLAttributes<HTMLInputElement> {
  isLarge: boolean;
}

const PrettyInput = ({ isLarge, ...rest }: PrettyInputProps) => (
  <div
    style={{
      backgroundColor: 'white',
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      width: isLarge ? '300px' : '100px',
    }}
  >
    <input type='text' style={{ width: '100%' }} {...rest} />
  </div>
);

export default PrettyInput;
