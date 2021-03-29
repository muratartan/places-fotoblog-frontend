import React from 'react';
import {useParams} from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {VALIDATOR_REQUIRE,VALIDATOR_MINLENGTH} from '../../Util/validator';

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

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    if (!identifiedPlace) {
        return <div className='center'>
            <h2>Could not found place!</h2>
        </div>
    }

    return <form>
        <Input 
        id='title' 
        element='input' 
        type='text' 
        label='Title' 
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true} />

        <Input 
        id='description' 
        element='textarea'  
        label='Description' 
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid descirption (min 5 characters)'
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true} />

        <Button type='submit' diabled={true}>UPDATE PLACE</Button>
    </form>
};

export default UpdatePlace;