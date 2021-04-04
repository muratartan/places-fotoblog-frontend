import React from 'react';

import Card from '../../shared/components/UIElements/Card/Card';
import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH} from '../../Util/validator';
import {useForm} from '../../shared/hooks/form-hook';
import './Auth.css';

const Auth = (props) => {

  const [formState, inputHandler] =  useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    },false)

    return <Card className='authentication'>
        <h2>Login required!</h2>
        <hr/>
        <form>
            <Input 
            element="input" 
            id="email" 
            type="email" 
            label="E-mail" 
            validators={[VALIDATOR_EMAIL]}
            errorText="please enter a valid email"
            onChange={inputHandler}></Input>
        </form>
    </Card>
};

export default Auth;