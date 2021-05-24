import React from 'react';

function Quote({quote, person, date, avatarUrl}) {
    // STYLES
    // ========================================================================
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        gridTemplateAreas: `'avatar person date .'
                            'avatar quote quote quote'
                            'avatar quote quote quote'`,                      
        width: '100%',
        height: '100%',
        border: '2px solid orange',
    }

    const imgDivStyle = {
        gridArea: 'avatar',
        height: '100%',
        width: '100%',
        border: '2px solid white',  
    }

    const quoteDivStyle = {
        gridArea: 'quote',
        height: '100%',
        width: '100%',
        border: '2px solid green',
    }

    const personDivStyle = {
        gridArea: 'person',
        border: '2px solid red',
        height: '100%',
        width: '100%',
    }

    const dateDivStyle = {
        gridArea: 'date',
        border: '2px solid yellow',
        height: '100%',
        width: '100%',
    }

    // ========================================================================
    // Grid wasn't aligning properly before...
    // ... needed divs to hold each grid area
    return (
        <div style={gridContainerStyle}>
            <div style={imgDivStyle}>
            <img src={avatarUrl} alt='discord avatar image'></img>
            </div>
            <div style={personDivStyle}>
                <h2>{`${person}`}</h2>
            </div>
            <div style={dateDivStyle}>
                <h2>{`${date}`}</h2>
            </div>
            <div style={quoteDivStyle}>
                <h1>{`${quote}`}</h1>
            </div>
        </div>
    );
}

export default Quote