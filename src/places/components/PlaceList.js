import React from 'react';

import Card from '../../shared/components/UIElements/Card/Card';
import './PlaceList.css';

const PlaceList = props => {
    if (props.items.length === 0) {
        return <div className='place-list center'>
            <Card>
            <h2>No places found. Maybe add one?</h2>
            <button>share place</button>
            </Card>
        </div>
    }
};

export default PlaceList;