import React from 'react';
import css from 'components/Feedback/Feedback.module.css'
import Statistics from "components/Statistics/Statistics";

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

    render() {
        return (
            <div>
                <div>
                    <h1>Please leave feedback</h1>
                    <div>
                        <button type="button" onClick={this.handleBtnGood}>Good</button>
                        <button type="button" onClick={this.handleBtnNeutral}>Neutral</button>
                        <button type="button" onClick={this.handleBtnBad}>Bad</button>
                    </div>
                </div>
                <div>
                    <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad}/>
                </div>
            </div>
            )
    } 

}
   
export default Feedback;