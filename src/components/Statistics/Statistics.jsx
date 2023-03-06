
import React from "react";
import css from 'components/Statistics/Statistics.module.css'

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    return (
        
        <div>
            <ul className={css.statistic}>
                <li className={css.statisticSet}>Good: {good}</li>
                <li className={css.statisticSet}>Neutral: {neutral}</li>
                <li className={css.statisticSet}>Bad: {bad}</li>
                <li className={css.statisticSet}>Total: {total}</li>
                <li className={css.statisticSet}>Positive feedback:
                    {positivePercentage ? ` ${positivePercentage}` : ` 0`}
                    %
                </li>
            </ul>    
        </div>
    )
}
