import React from 'react';

function Quote({quote, person, date, avatarUrl}) {
    // STYLES
    // ========================================================================

    const divStyle = {
        display: 'flex',
    }
    const imgStyle = {
        height: '100px',
        width: '100px',
        borderRadius: '50%',
        border: '2px solid grey',
    }

    const h1Style = {
        // something
    }

    // ========================================================================
    return (
        <div style={divStyle}>
            <img style={imgStyle} src={avatarUrl} alt='discord avatar image'></img>
            <h1>{`${quote} - ${person} [${date}]`}</h1>
        </div>
    );
}

export default Quote