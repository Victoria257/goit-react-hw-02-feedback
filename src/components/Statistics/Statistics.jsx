
import React from "react";
import css from 'components/Statistics/Statistics.module.css'

const Statistics = ({good, neutral, bad})=> {

    return (
        <div>
            <h2>Statistics</h2>
            <ul>
                <li>Good:{good}</li>
                <li>Neutral:{neutral}</li>
                <li>Bad:{bad}</li>
            </ul>    
        </div>
    )
}

export default Statistics;