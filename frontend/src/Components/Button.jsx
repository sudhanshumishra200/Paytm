// components/Button.jsx
// import React from 'react';

export const Button = ({ children, label, className = '', onClick, disabled, ...props }) => {
    return (
        <button
            className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00baf2] ${className}`}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
            {label}
        </button>
    );
};