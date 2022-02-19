import React from 'react';
import styles from './Button.module.scss';

const Button = ({ children, onClick }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') onClick();
    return null;
  };
  return (
    <button onClick={handleClick} className={styles.btn}>
      {children}
    </button>
  );
};

export default Button;
