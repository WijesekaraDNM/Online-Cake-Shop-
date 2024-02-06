import classes from './subButton.module.css';
import React from 'react'

export default function SubButton({
    type,
    text,
    onClick,
    color,
    backgroundColor,
    fontSize,
    width,
    height,
}) {

  return (
    <div className={classes.container}>
        <button 
            style={{
                color,backgroundColor,
                fontSize,
                width,
                height,
            }}
            type ={ type}
            onClick={onClick}
        >
            {text}
            </button>
        </div>
  );
}

SubButton.defaultProps = {
    type: 'button',
    text: 'Submit',
    color: 'white',
    backgroundColor: 'crimson',
    fontSize:'1rem',
    width: '18rem',
    height: '1.5rem',
};