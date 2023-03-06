
import React from "react";
import css from 'components/Statistics/Statistics.module.css'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return (
        <div className={css.statistic}>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback:
                    {positivePercentage ? ` ${positivePercentage}` : ` 0`}
                    %
                </li>
            </ul>    
        </div>
    )
}

export default Statistics;