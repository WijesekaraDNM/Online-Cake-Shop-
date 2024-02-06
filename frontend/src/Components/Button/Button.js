import classes from './button.module.css';
import React from 'react'

export default function Button({
    type,
    text,
    onClick,
    color,
    backgroundColor,
    fontSize,
    width,
    height,
    margin,
}) {

  return (
    <div className={classes.container}>
        <button 
            style={{
                color,backgroundColor,
                fontSize,
                width,
                height,
                margin,
            }}
            type ={ type}
            onClick={onClick}
        >
            {text}
            </button>
        </div>
  );
}

Button.defaultProps = {
    type: 'button',
    text: 'Submit',
    color: 'white',
    backgroundColor: 'crimson',
    fontSize:'1.5rem',
    width: '12rem',
    height: '3.5rem',
    margin: '1rem',
};
