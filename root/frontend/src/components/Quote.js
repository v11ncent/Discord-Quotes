import React from 'react';

function Quote({quote, person, date, avatarUrl}) {
    const divStyle = {
        width: '75%',
        height: '70%',
        paddingLeft: '22%',
    }
    const quoteStyle = {
        color: 'white',
        border: 'solid 2px white',
        listStyleImage: `url(${avatarUrl})`,
    }
    return (
        <div style={divStyle}>
            <li style={quoteStyle}>
                {`${quote} - ${person} [${date}]`}
            </li>
        </div>
    );
}

export default Quote