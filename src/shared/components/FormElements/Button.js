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
    if (props.to) {
        return (
          <Link
            to={props.to}
            exact={props.exact}
            className={`button button--${props.size || 'default'} ${props.inverse &&
              'button--inverse'} ${props.danger && 'button--danger'}`}
          >
            {props.children}
          </Link>
        );
      }


};

export const Button;