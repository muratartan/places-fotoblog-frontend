import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../Util/validator';
import Button from '../../shared/components/FormElements/Button';
import {useForm} from '../../shared/hooks/form-hook';
import './Placeform.css';



const NewPlace = () => {

   const [formState,inputHandler] = useForm(
        {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            },
            address: {
                value: '',
                isValid: false
            }
        }, 
        false
    );

    const placeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);  // sent this to backend later!!!
    };

    return <form className='place-form' onSubmit={placeSubmitHandler}>
        <Input
            id='title'
            element="input"
            type='text'
            label='Title'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid title'
            onInput={inputHandler} />

        <Input
            id='description'
            element="textarea"
            label='Description'
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText='Please enter a valid description (at least % characters)'
            onInput={inputHandler} />
        <Input
            id='address'
            element="input"
            label='Address'
            validators={[VALIDATOR_REQUIRE()]}
            errorText='Please enter a valid addresss'
            onInput={inputHandler} />

        <Button type='submit' disabled={!formState.isValid}>ADD PLACE</Button>
    </form>
};

export default NewPlace;