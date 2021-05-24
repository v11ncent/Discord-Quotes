import React from 'react';

function Quote({quote, person, date, avatarUrl}) {
    // STYLES
    // ========================================================================
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr',
        gridTemplateAreas: `'avatar person date date'
                            'avatar quote quote quote'
                            'avatar quote quote quote'`,                      
        width: '100%',
        height: '100%',
    }

    const imgContainerStyle = {
        gridArea: 'avatar',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '100%',
        width: '100%', 
    }

    const quoteContainerStyle = {
        gridArea: 'quote',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        border: '2px solid white',
        margin: '0',
        padding: '0',
    }

    const personContainerStyle = {
        gridArea: 'person',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        width: '100%',
    }

    const dateContainerStyle = {
        gridArea: 'date',
        height: '100%',
        width: '100%',
    }

    const imgStyle = {
        width: '50%',
        height: '70%',
        borderRadius: '50%',
        border: '3px solid black',
    }

    const quoteStyle = {
        height: '100%',
        overflow: 'scroll',
        fontSize: '2rem',
    }

    const personStyle = {
        fontSize: '2.5rem',
    }

    const dateStyle = {
        fontSize: '2.5rem',
    }

    // ========================================================================
    // Grid wasn't aligning properly before...
    // ... needed divs to hold each grid area
    return (
        <div style={gridContainerStyle}>
            <div style={imgContainerStyle}>
                <img style={imgStyle} src={avatarUrl} alt='discord avatar image'></img>
            </div>
            <div style={personContainerStyle}>
                <div style={personStyle}>{`${person}`}</div>
            </div>
            <div style={dateContainerStyle}>
                <div style={dateStyle}>{`${date}`}</div>
            </div>
            <div style={quoteContainerStyle}>
                <div style={quoteStyle}>{`${quote}`}</div>
            </div>
        </div>
    );
}

export default Quote