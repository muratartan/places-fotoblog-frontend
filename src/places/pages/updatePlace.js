import React from 'react';
import {useParams} from 'react-router-dom';

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

    return <h2>Update Place</h2>
};

export default UpdatePlace;