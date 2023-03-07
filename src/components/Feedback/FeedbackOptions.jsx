import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({handleBtn}) => {
          return (<div className={css.buttonsWrapper}>
                        <button className={css.button} name="good" type="button" onClick={handleBtn}>Good</button>
                        <button className={css.button} name="neutral" type="button" onClick={handleBtn}>Neutral</button>
                        <button className={css.button} name="bad" type="button" onClick={handleBtn}>Bad</button>
                </div>)
}