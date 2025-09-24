import { useQuery } from '@apollo/client/react';
import React from 'react'
import { GET_LOCATIONS } from '../../utils/queries';

function Gql() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    return data.locations.map(({ id, name, description, photo }) => (
        <div key={id}>
            <h3>{name}</h3>
            <img width="400" height="250" alt="location-reference" src={`${photo}`} />
            <br />
            <b>About this location:</b>
            <p>{description}</p>
            <br />
        </div>
    ))
}

export default Gql
