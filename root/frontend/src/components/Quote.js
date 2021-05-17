import React from 'react';

function Quote({quote, person, date}) {
    return (
        <div>
            <h1 style={{border: 'solid 1px white'}}>{`${quote} - ${person} [${date}]`}</h1>
        </div>
    );
}

export default Quote