import React, {Component} from 'react';
import DatePicker from 'sassy-datepicker';
import BookingPageService from '../Booking/bookingPageService';
import Amplify from "aws-amplify";
import { withAuthenticator, AmplifySignIn, AmplifyAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../../configs/awsconfig";

Amplify.configure(awsconfig)

class BookingPage extends Component {
    state = {
        currentDate: new Date(),
        date: new Date(),
        selectedDate: '',
        selectedDay: '',
        allSchedules: [],
        userAdmin: false
    }

    onChange = date => {
        this.setState({ date })
    }

    componentDidMount() {
        fetch("http://localhost:8080/salon/schedule").then((response) => response.json()).then(result => { this.setState({ allSchedules: result }) });
        if (localStorage.getItem("userName"))
            fetch(`http://localhost:8080/staff/check/${Amplify.Credentials.Auth.user.attributes.email}`).then((response) => response.json()).then(result => { this.setState({ userAdmin: result }) });
    }

    render() {
        var today = new Date();
        var this_year = today.getFullYear();
        var this_month_index = today.getMonth();
        var this_month = this_month_index + 1
        const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        localStorage.setItem("userAdmin", this.state.userAdmin)
        return (
            <div>
                <div>
                    {localStorage.getItem("userName") === null && Amplify.Credentials.Auth.user !== null && (
                        <div>
                            {localStorage.setItem("userName", Amplify.Credentials.Auth.user.username)}
                            {localStorage.setItem("userEmail", Amplify.Credentials.Auth.user.attributes.email)}
                            {localStorage.setItem("userPhone", Amplify.Credentials.Auth.user.attributes.phone_number)}
                            {window.location.reload()}
                        </div>)}
                </div>
                <div className="calendar">
                    <div className="d-flex justify-content-center my-3">
                        <div>
                        <DatePicker onChange={this.onChange}
                                    value={this.state.date}
                                    minDate={today}
                                    maxDate={new Date(this_year, this_month, 0)} />
                        </div>
                        <div>
                            <BookingPageService selectedDate={this.state.date.getDate()}
                                                selectedYearMonthDate={this_year+"-"+String(this_month).padStart(2,"0")+"-"+String(this.state.date.getDate()).padStart(2,"0")}
                                                selectedDay={days[this.state.date.getDay()].toUpperCase()}
                                                allSchedules={this.state.allSchedules}
                                                selectedService={"service"}
                                                historyPath={this.state.history} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withAuthenticator(BookingPage);