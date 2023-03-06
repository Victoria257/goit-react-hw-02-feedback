import React from 'react';
import css from 'components/Feedback/Feedback.module.css';
import Statistics from "components/Statistics/Statistics";
import { Notification } from 'components/NotificationMessage/NotificationMessage';

class Feedback extends React.Component {

    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    }

    // static propTypes = {

    // }

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
    }
    
    handleBtnGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    };

    handleBtnNeutral=()=> {
     this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    }

    handleBtnBad=()=> {
          this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    }

    countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    }

    countPositiveFeedbackPercentage = (total, good) => {
        return Math.round(good / total * 100);
    }

    render() {
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage(total, this.state.good);
        return (
            <div className={css.wrapper} >
                <div >
                    <h1>Please leave feedback</h1>
                    <div>
                        <button type="button" onClick={this.handleBtnGood}>Good</button>
                        <button type="button" onClick={this.handleBtnNeutral}>Neutral</button>
                        <button type="button" onClick={this.handleBtnBad}>Bad</button>
                    </div>
                </div>
                <div>
                    {total > 0 ? (
                         <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercentage } />
                    ):(<Notification/>)}
                   
                </div>
            </div>
            )
    } 

}
   
export default Feedback;