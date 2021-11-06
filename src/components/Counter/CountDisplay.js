import React from 'react';
import {useSelector} from "react-redux";

const CountDisplay = () => {

    const st= useSelector(state => state.countReducer)

    return (
        <div>
            <h1>Count:{st.count}</h1>
        </div>
    );
};

export default CountDisplay;