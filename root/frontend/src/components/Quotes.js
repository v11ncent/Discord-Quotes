// https://reactjs.org/docs/state-and-lifecycle.html
import React, { useState, useEffect } from 'React';
import axios from 'axios';

function Quotes() {
    // sets state and update state functions
    const [data, setData] = useState({ hits: [] });
    const fetchData = async () => {
        const result = await axios
    }

}