import React from 'react';

import UsersList from '../components/UserList/UsersList';

const Users = () => {

    const USERS = [{id: 'u1' , name: 'murat cepni' , image: 'https://unsplash.com/photos/gutlccGLXKI' , places: 3}]

    return <UsersList items={USERS} />;
}

export default Users;