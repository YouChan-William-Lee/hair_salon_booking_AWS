import React, {Component} from 'react';
import "../../styleSheets/bookingPage.css"

class BookingPageTime extends Component {
    constructor() {
        super();

        this.state={
            selectedDate: '',
            selectedService: '',
            selectedTime:'',
            selectedDesigner: '',
            allSchedules: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const newBooking = {
            date: this.state.date,
            designer: this.state.designer,
            service: this.state.service
        };
        this.props.createNewBooking(newBooking, this.props.historyPath);
    }

    render() {
        console.log(this.props.selectedDay)
        console.log(this.props.selectedDate)
        console.log(this.props.selectedService)
        console.log(this.props.selectedDesigner)
        var availableTimes = [];
        var staffId
        switch (this.props.selectedDesigner) {
            case "William":
                staffId = 1;
                break;
            case "Jane":
                staffId = 2;
                break;
            case "Mark":
                staffId = 3;
                break;
        }
        console.log(this.props.allSchedules[0].workingPeriods[1])
        for (var i = 0; i < this.props.allSchedules[staffId - 1].workingPeriods.length; i++) {
            if (this.props.allSchedules[staffId - 1].workingPeriods[i].workingWeek == this.props.selectedDay) {
                for (var j = 0; j < this.props.allSchedules[staffId - 1].workingPeriods[i].workingTimes.length; j++) {
                    availableTimes.push(this.props.allSchedules[staffId - 1].workingPeriods[i].workingTimes[j]);
                }
            }
        }
        // TODO - Deduct from booking list

        return (
            <div>
                <div className="d-flex justify-content-center my-3">
                    <form onSubmit={this.onSubmit.bind(this)} action="create-profile.html">
                        <select className="form-select bg-dark text-white p-2" name="selectedTime" onChange={this.onChange}>
                            <option value="time" selected>Time</option>
                            {availableTimes.map(time => (
                                <option value={time}>{time}</option>
                            ))}
                        </select>
                    </form>
                </div>
                {console.log(this.state.selectedTime)}
                {this.state.selectedTime != '' &&
                    <div className="d-flex justify-content-center my-3">
                        <input type="submit" className="btn btn-success btn-block mt-4" />
                    </div>
                }
            </div>
        );
    }
}

export default BookingPageTime;