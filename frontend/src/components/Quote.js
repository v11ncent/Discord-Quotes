import React from 'react';
import defaultImg from '../images/default-image.jpg';

function Quote({quote, person, date, avatarUrl}) {
    // STYLES
    // ========================================================================
    const gridContainerStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '50px 1fr 1fr',
        gridTemplateAreas: `'avatar person date date'
                            'avatar quote quote quote'
                            'avatar quote quote quote'`,                      
        width: '100%',
    }

    const imgContainerStyle = {
        gridArea: 'avatar',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: '100%',
        width: '100%', 
    }

    const quoteContainerStyle = {
        gridArea: 'quote',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: '100%',
        margin: '0',
        padding: '0',
        borderRadius: '20px',
        background: '#2c2f33',
        padding: '1% 1% 1% 1%',
        border: '2px solid white',
    }

    const personContainerStyle = {
        gridArea: 'person',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingLeft: '4%',
    }

    const dateContainerStyle = {
        gridArea: 'date',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        paddingRight: '4%',
    }

    const imgStyle = {
        width: '55%',
        height: 'auto',
        borderRadius: '50%',
        background: '#2c2f33',
        boxShadow: '2px 2px #888888',
    }

    const quoteStyle = {
        width: '100%',
        overflowX: 'scroll',
        fontSize: '2vw',
        fontFamily: 'Whitney',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '1.5px 1.5px #738adb',
    }

    const personStyle = {
        fontSize: '2vw',
        fontFamily: 'Whitney',
        fontWeight: 'bold',
        color: 'white',
        textShadow: '1.5px 1.5px #738adb',
    }

    const dateStyle = {
        fontSize: '2vw',
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