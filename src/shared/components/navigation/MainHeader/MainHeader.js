import React from 'react';

import './MainHeader.css';

const MainHeader = props => {
    return <header classname='main-header'>
        {props.children}
    </header>
};

export default MainHeader;