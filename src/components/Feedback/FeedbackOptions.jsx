import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({handleBtnGood,handleBtnNeutral,handleBtnBad}) => {
          return (<div className={css.buttonsWrapper}>
                        <button className={css.button} name="good" type="button" onClick={handleBtnGood}>Good</button>
                        <button className={css.button} name="neutral" type="button" onClick={handleBtnNeutral}>Neutral</button>
                        <button className={css.button} name="bad" type="button" onClick={handleBtnBad}>Bad</button>
                </div>)
}