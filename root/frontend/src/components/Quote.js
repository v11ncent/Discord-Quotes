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
        justifyContent: 'flex-start',
        alignItems: 'center',
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
        borderRadius: '20px',
        background: '#2c2f33',
        padding: '1% 1% 1% 1%',
    }

    const personContainerStyle = {
        gridArea: 'person',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    }

    const dateContainerStyle = {
        gridArea: 'date',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    }

    const imgStyle = {
        width: '50%',
        height: '70%',
        borderRadius: '50%',
        border: '3px solid white',
        background: '#2c2f33',
        boxShadow: '5px 5px #888888',
    }

    const quoteStyle = {
        height: '100%',
        width: '100%',
        overflow: 'scroll',
        fontSize: '2rem',
        fontFamily: 'Whitney',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '1.5px 1.5px #738adb',
    }

    const personStyle = {
        fontSize: '2.5rem',
        fontFamily: 'Whitney',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '1.5px 1.5px #738adb',
    }

    const dateStyle = {
        fontSize: '2.5rem',
        fontFamily: 'Whitney',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '1.5px 1.5px #738adb',
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