import React, {Component} from 'react';
import "../../styleSheets/bookingPage.css";
import { createBooking, bookingConfirmationCustomer, bookingConfirmationStaff } from "../../actions/bookingActions";
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import BookingPopUp from "../Booking/bookingPopUp";

class BookingPageTime extends Component {
    constructor() {
        super();

        this.state={
            selectedDate: '',
            selectedService: '',
            selectedTime:'',
            selectedDesigner: '',
            selectedDesignerId: '',
            selectedbookingDateTime: '',
            previousSelectedDate: '',
            allSchedules: [],
            popUpOn: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const salonBooking = {
            staffId: this.state.selectedDesignerId,
            staffName: this.props.selectedDesigner,
            staffEmail: this.props.allSchedules[this.state.selectedDesignerId - 2].staffEmail,
            customerName: localStorage.getItem("userName"),
            customerEmail: localStorage.getItem("userEmail"),
            hairCutType: this.props.selectedService,
            bookingDateTime: this.props.selectedYearMonthDate + " " + this.state.selectedTime,
            bookingDate: (new Date()).getFullYear()+"-"+String((new Date()).getMonth()+1).padStart(2,"0")+"-"+String((new Date()).getDate()).padStart(2,"0"),
            bookingTime: this.state.selectedTime
        }

        var bookingInfoCustomer = {
            Message: 'Your booking is confirmed with ' + this.props.selectedDesigner + ' at ' + this.props.selectedYearMonthDate + ' ' + this.state.selectedTime,
            PhoneNumber: localStorage.getItem("userPhone")
        };

        var bookingInfoStaff = {
            Message: 'A ' + this.props.selectedService + ' booking is confirmed with ' + localStorage.getItem("userName") + ' at ' + this.props.selectedYearMonthDate + ' ' + this.state.selectedTime,
            PhoneNumber: this.props.allSchedules[this.state.selectedDesignerId - 2].staffPhoneNumber
        };
        // Save the booking detail in DB
        this.props.createBooking(salonBooking);
        // Send booking confirmation to the customer
        this.props.bookingConfirmationCustomer(bookingInfoCustomer);
        // Send booking confirmation to the staff
        this.props.bookingConfirmationCustomer(bookingInfoStaff);
    }

    componentDidUpdate() {
        if (this.state.previousSelectedDate !== '' && this.props.selectedDate && this.state.previousSelectedDate !== this.props.selectedDate) {
            this.state.selectedTime = "time";
        }
    }

    render() {
        //Firstly, find the designer's staffId
        for (var i = 0; i < this.props.allSchedules.length; i++) {
            if (this.props.selectedDesigner === this.props.allSchedules[i].staffName) {
                this.state.selectedDesignerId = i + 2;
            }
        }
        var staffId = this.state.selectedDesignerId


        // Secondly, find the times already taken on the designer
        var bookingTime
        var bookedTimes = [];
        for (var j = 0; j < this.props.allSchedules[staffId - 2].bookingDateTimes.length; j++) {
            if (this.props.allSchedules[staffId - 2].bookingDateTimes[j].includes(this.props.selectedYearMonthDate)) {
                bookingTime = this.props.allSchedules[staffId - 2].bookingDateTimes[j];
                bookedTimes.push(bookingTime.substring(bookingTime.indexOf(' ') + 1))
            }
        }

        // Lastly, make the available times
        var fullTimes = ["10:00:00", "11:00:00", "12:00:00", "13:00:00", "14:00:00", "15:00:00", "16:00:00", "17:00:00", "18:00:00"];
        var availableTimes = fullTimes.filter(item => !bookedTimes.includes(item))

        // Show pop up message after finishing the booking
        const PopUp = () => {
            this.setState({popUpOn: !this.state.popUpOn})
        }

        // Refresh the page after finishing the booking
        const Refresh = () => {
            window.location.href = "/";
        }

        return (
            <div>
                <div className="d-flex justify-content-center my-3">
                    <form onSubmit={this.onSubmit}>
                        <select value={this.state.selectedTime} className="form-select bg-dark text-white p-2" name="selectedTime" onChange={this.onChange}>
                            <option value="time">Time</option>
                            {availableTimes.map(time => (
                                <option key={time} value={time}>{time}</option>
                            ))}
                        </select>
                        {this.state.selectedTime !== '' &&
                            <div className="d-flex justify-content-center my-3">
                                <input type="submit" className="btn btn-primary btn-block mt-4" onClick={PopUp} />
                            </div>
                        }
                    </form>
                </div>
                {this.state.popUpOn && <BookingPopUp content={<>Your Booking has been successfully done</>} handleClose={Refresh} />}
            </div>
        );
    }
}
BookingPageTime.propTypes = {
    createBooking: PropTypes.func.isRequired,
    bookingConfirmationCustomer: PropTypes.func.isRequired,
    bookingConfirmationStaff: PropTypes.func.isRequired
}
const mapStateProps = state => ({
    errors: state.errors
})
export default connect(
    mapStateProps,
    { createBooking, bookingConfirmationCustomer, bookingConfirmationStaff }
)(BookingPageTime);