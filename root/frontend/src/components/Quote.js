import React from 'react';

function Quote({quote, person, date}) {
    return (
        <div>
            <li className='quote-list-element' style={{listStyleType: 'none'}}>{`${quote} - ${person} [${date}]`}</li>
        </div>
    );
}

export default Quote