import React, {Component} from 'react';
import { Link } from "react-router-dom";
import BookingPageService from "./bookingPageService"
import "../../styleSheets/bookingPage.css"

class BookingPage extends Component {
    constructor() {
        super();

        this.state = {
            allSchedules: [],
            selectedDate:'',
            selectedDay:'',
            date: '',
            designer: '',
            service: '',
            fee: '',
            currentDate: new Date()
        };
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

    componentDidMount() {
        fetch("http://localhost:8080/salon/schedule").then((response) => response.json()).then(result => { this.setState({ allSchedules: result }) });
    }

    render() {
        const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
        const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var this_date = this.state.currentDate.getDate();
        var last_date_of_month = (new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() + 1, 0)).getDate();
        var datelist = [];
        for (var i = this_date; i <= last_date_of_month; i++) {
            let adddate = i + "/" +
                months[this.state.currentDate.getMonth()] + "/" +
                this.state.currentDate.getFullYear() + " " +
                days[(this.state.currentDate.getDay() + i - this_date) % 7];
            datelist.push(adddate);
        }
        return (
            <div className="bookingpage">
                <br />
                <div className="display-4 text-center">
                    <h1>Booking</h1>
                </div>
                <br />
                <br />
                <div className="d-flex justify-content-center my-3">
                    <form onSubmit={this.onSubmit.bind(this)} action="create-profile.html">
                        <select className="form-select bg-dark text-white p-2" name="selectedDate" onChange={this.onChange}>
                            <option value={"DATE"} selected>DATE</option>
                            {datelist.map(date => (
                                <option value={date}>{date}</option>
                            ))}
                        </select>
                    </form>
                </div>
                {this.state.selectedDate != '' ?
                    <div>
                        <BookingPageService selectedDate={this.state.selectedDate}
                                            selectedDay={this.state.selectedDate.substring(this.state.selectedDate.indexOf(' ')+1).toUpperCase()}
                                            allSchedules={this.state.allSchedules}
                                            historyPath={this.props.history} />
                    </div>
                    :
                    <div></div>
                }
            </div>
        );
    }
}

export default BookingPage;