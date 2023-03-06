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
    
    handleBtnGood = (event) => {
        // console.log(event.target.name);
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
            <div>
                <div>
                    <Section title={'Please leave feedback'}>
                        <FeedbackOptions handleBtnGood={this.handleBtnGood} handleBtnNeutral={this.handleBtnNeutral} handleBtnBad={this.handleBtnBad}/>
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