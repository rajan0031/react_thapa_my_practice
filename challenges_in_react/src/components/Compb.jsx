import React from 'react';

function Compb({ name }) {
    console.log('name:', name);

    if (!name) {
        // Add any fallback or loading logic here if needed
        return null;
    }

    const { firstName, lastName } = name;
    console.log('firstName:', firstName, 'lastName:', lastName);

    return (
        <div>
            <h1>{firstName} {lastName}</h1>
        </div>
    );
}

export default Compb;
