import React, {Component} from 'react';
import Calendar from "./calendar"

class CalendarPage extends Component {
    constructor() {
        super();
        this.state={
            today: new Date(),
            selectedDate: ''
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
    }

    render() {

        return (
            <div className="calendar">
                <div className="d-flex justify-content-center my-3">
                    <Calendar />
                </div>
                {console.log(this.props.selectedDate)}
                <br />
                <div className="d-flex justify-content-center my-3">
                    <h1>Available Designers</h1>
                </div>
            </div>

        );
    }
}

export default CalendarPage;