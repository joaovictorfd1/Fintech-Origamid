import React from 'react';

type ButtonProps = {
  labelButton: string
  onClick?: () => void
};

const Button = ({onClick, labelButton}: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {labelButton}
    </button>
  );
};

export default Button;