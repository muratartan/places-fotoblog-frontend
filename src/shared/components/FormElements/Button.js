import React from 'react';

import './Button.css';

const Button = props => {
    if (props.href) {
        return (
            <a className={`button button--${props.size || 'default'} ${props.inverse && 
                'button--inverse'} ${props.danger && 'button--danger'}`}
                     href={props.href} >
                {props.children}
            </a>
        );
    }
};

export const Button;