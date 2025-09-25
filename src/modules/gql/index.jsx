import { useMutation, useQuery } from '@apollo/client/react';
import React from 'react'
import { ADD_TODO, GET_LOCATIONS } from '../../utils/queries';

function Gql() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
    const [addTodo, { data: createdData, loading: createLoader, error: createError }] = useMutation(ADD_TODO, {
        variables: {
            type: "placeholder",
            someOtherVariable: 1234,
        },
    });

    if (loading || createLoader) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (createError) return <p>Error : {createError.message}</p>;

    return <>
        {data.locations.map(({ id, name, description, photo }) => (
            <div key={id}>
                <h3>{name}</h3>
                <img width="400" height="250" alt="location-reference" src={`${photo}`} />
                <br />
                <b>About this location:</b>
                <p>{description}</p>
                <br />
            </div>
        ))}
        <button onClick={() => addTodo({ variables: { type: 'test' } })}>Create todo</button>
    </>
}

export default Gql
