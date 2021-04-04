import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../Util/validator';
import { useForm } from '../../shared/hooks/form-hook';
import './Placeform.css';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://media.timeout.com/images/101705309/image.jpg',
        address: '20 W 34th Street, New york',
        location: {
            lat: 40.748432,
            lng: -73.985656
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world',
        imageUrl: 'https://media.timeout.com/images/101705309/image.jpg',
        address: '20 W 34th Street, New york',
        location: {
            lat: 40.748432,
            lng: -73.985656
        },
        creator: 'u2'
    }
];

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const [formState, inputHandler, setFormData] = useForm({
        title: {
            value: '',
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        }
    }, false);

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    useEffect(() => {
        setFormData({
            title: {
                value: identifiedPlace.title,
                isValid: true
            },
            description: {
                value: identifiedPlace.description,
                isValid: true
            }
        },
            true);
    }, [setFormData, identifiedPlace]);


    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return <div className='center'>
            <h2>Could not found place!</h2>
        </div>
    }

    if (!formState.inputs.title.value) {
        return <div className='center'>
            <h2>Loading..!</h2>
        </div>
    }

    return (
        <form className='place-form' onSubmit={placeUpdateSubmitHandler}>
            <Input
                id='title'
                element='input'
                type='text'
                label='Title'
                validators={[VALIDATOR_REQUIRE()]}
                errorText='Please enter a valid title'
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.title.isValid} />

            <Input
                id='description'
                element='textarea'
                label='Description'
                validators={[VALIDATOR_MINLENGTH(5)]}
                errorText='Please enter a valid descirption (min 5 characters)'
                onInput={inputHandler}
                initialValue={formState.inputs.title.value}
                initialValid={formState.inputs.description.isValid} />

            <Button type='submit' diabled={true}>UPDATE PLACE</Button>
        </form>
    );
};
export default UpdatePlace;