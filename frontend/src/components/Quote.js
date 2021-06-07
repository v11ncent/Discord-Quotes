import React from 'react';
import defaultImg from '../images/default-image.jpg';

function Quote({quote, person, date, avatarUrl}) {
    // STYLES
    // ========================================================================
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '2.5vw 1fr 1fr',
        gridTemplateAreas: `'avatar person date date'
                            'avatar quote quote quote'
                            'avatar quote quote quote'`,                      
        width: '100%',
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
        margin: '0',
        borderRadius: '20px',
        background: '#2c2f33',
        padding: '1% 1.5vh 1% 1.5vh',
        border: '1px solid white',
    }

    const personContainerStyle = {
        gridArea: 'person',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        paddingLeft: '4%',
    }

    const dateContainerStyle = {
        gridArea: 'date',
        display: 'flex',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingRight: '4%',
    }

    const imgStyle = {
        width: '45%',
        height: 'auto',
        borderRadius: '50%',
        background: '#2c2f33',
        border: '1px solid white',
        boxShadow: '0px 0px 3px white inset',
    }

    const quoteStyle = {
        width: '100%',
        overflowX: 'scroll',
        fontSize: '1.75vw',
        fontFamily: 'Whitney',
        fontWeight: 'bold',
        color: 'white',
    }

    const personStyle = {
        fontSize: '1.75vw',
        fontFamily: 'Whitney',
        fontWeight: 'bold',
        color: 'white',
    }

    const dateStyle = {
        fontSize: '1.75vw',
        fontFamily: 'Whitney',
        fontWeight: 'bold',
        color: 'white',
    }

    // ========================================================================
    // Grid wasn't aligning properly before...
    // ... needed divs to hold each grid area
    return (
        <div style={gridContainerStyle}>
            <div style={imgContainerStyle}>
                <img style={imgStyle} src={avatarUrl} onError={(e)=>{e.target.src = defaultImg}} alt='discord avatar image'></img>
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