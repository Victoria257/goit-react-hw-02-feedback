import React from 'react';
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from 'components/NotificationMessage/NotificationMessage';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from 'components/Section/Section';

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
    
    handleBtn = (event) => {
        this.setState(prevState => {
            return {
                [event.target.name]: prevState[event.target.name] + 1,
            };
        });
    
    };

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
            <div>
                <div>
                    <Section title={'Please leave feedback'}>
                        <FeedbackOptions handleBtn={this.handleBtn}/>
                    </Section>
                </div>
                <div>
                    <Section title={"Statistics"}>
                    {total > 0 ? (
                            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={total} positivePercentage={positivePercentage } />
                        ) : (<Notification />)} 
                    </Section>
                </div>
            </div>
            )
    } 

}
   
export default Feedback;