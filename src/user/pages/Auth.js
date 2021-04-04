import React from 'react';

import Card from '../../shared/components/UIElements/Card/Card';
import Input from '../../shared/components/FormElements/Input';
import {VALIDATOR_EMAIL, VALIDATOR_MINLENGTH} from '../../Util/validator';
import './Auth.css';

const Auth = props => {
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
            onChange={}></Input>
        </form>
    </Card>
};

export default Auth;