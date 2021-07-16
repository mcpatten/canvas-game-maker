import React from 'react';
import styles from './main.css';

export const Main: React.FunctionComponent = () => {
  return (
    <div className={styles.someStyle}>
      <h1>
        Welcome to my Main Component
        <p>Ok, so now what?</p>
      </h1>
    </div>
  );
};
