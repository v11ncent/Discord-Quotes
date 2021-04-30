// https://reactjs.org/docs/state-and-lifecycle.html
import React, { useState, useEffect } from 'React';
import axios from 'axios';

function Quotes() {
    // sets states and update state functions
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // the empty array ensures that the component mounts only after the initial render
    // stops it from rendering after every change (infinitely)
    useEffect(() => {
        getData();
    }, []);

    // since useEffect does not use async to prevent race conditions
    // we make the function inside an async func
    async function getData() {
        await axios.get('http://localhost:8080/')
        .then(response => {
            setData(response.data)
            console.log(response.data);
        })
        .catch(err => {
            console.error(`Error fetching data\n${err}`);
            setError(err);
        })
        .finally(() => {
            setLoading(false);
        })
    }

    if (loading) return 'Loading...'
    if (error) return 'Error...'

    return data;
}