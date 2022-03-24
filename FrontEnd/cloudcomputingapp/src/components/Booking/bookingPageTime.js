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
        //Firstly, find the designer's staffId
        var staffId
        for (var i = 0; i < this.props.allSchedules.length; i++) {
            if (this.props.selectedDesigner == this.props.allSchedules[i].staffName) {
                staffId = i + 1;
            }
        }

        // Secondly, find the times already taken on the designer
        var bookingTime
        var bookedTimes = [];
        for (var j = 0; j < this.props.allSchedules[staffId - 1].bookingDateTimes.length; j++) {
            if (this.props.allSchedules[staffId - 1].bookingDateTimes[j].includes(this.props.selectedYearMonthDate)) {
                bookingTime = this.props.allSchedules[staffId - 1].bookingDateTimes[j];
                bookedTimes.push(bookingTime.substring(bookingTime.indexOf(' ') + 1))
            }
        }

        // Lastly, make the available times
        console.log(bookedTimes)
        var fullTimes = ["10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00"];
        var availableTimes = fullTimes.filter(item => !bookedTimes.includes(item))

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
                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </div>
                }
            </div>
        );
    }
}

export default BookingPageTime;