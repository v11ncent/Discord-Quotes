import React from 'react';

function Quote({quote, person, date, avatarUrl}) {
    // STYLES
    // ========================================================================

    const divStyle = {
        display: 'flex',
    }
    const imgStyle = {
        // something
    }

    const h1Style = {
        // something
    }

    // ========================================================================
    return (
        <div style={divStyle}>
            <img src={avatarUrl} alt='discord avatar image'></img>
            <h1>{`${quote} - ${person} [${date}]`}</h1>
        </div>
    );
}

export default Quote