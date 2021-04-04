import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';


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

const UserPlaces = props => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId)
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;