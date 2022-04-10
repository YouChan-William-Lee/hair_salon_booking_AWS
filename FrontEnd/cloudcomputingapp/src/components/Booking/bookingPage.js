import React, {Component} from 'react';
import DatePicker from 'sassy-datepicker';
import BookingPageService from '../Booking/bookingPageService';
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../../configs/awsconfig";
import { createCustomer } from "../../actions/customerActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

Amplify.configure(awsconfig)

class BookingPage extends Component {
    state = {
        currentDate: new Date(),
        date: new Date(),
        selectedDate: '',
        selectedDay: '',
        allSchedules: [],
        adminAccount: "youchanwilliamlee@gmail.com"
    }

    onChange = date => {
        this.setState({ date })
    }

    componentDidMount() {
        fetch("http://ec2-54-162-125-71.compute-1.amazonaws.com:8080/salon/schedule").then((response) => response.json()).then(result => {
            this.setState({allSchedules: result})
        });
        if (localStorage.getItem("userName")) {
            if (localStorage.getItem("userEmail") !== this.state.adminAccount && localStorage.getItem("userSavedInDb") === null) {
                const saveCustomer = {
                    customerEmail: localStorage.getItem("userEmail"),
                    phoneNumber: localStorage.getItem("userPhone"),
                    customerName: localStorage.getItem("userName")
                }
                localStorage.setItem("userSavedInDb", true);
                this.props.createCustomer(saveCustomer);
            }
            else if (localStorage.getItem("userEmail") === this.state.adminAccount && localStorage.getItem("refresh") === null) {
                localStorage.setItem("refresh", "Done");
                window.location.reload();
            }
        }
    }

    render() {
        var today = new Date();
        var this_year = today.getFullYear();
        var this_month_index = today.getMonth();
        var this_month = this_month_index + 1;
        const days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        return (
            <div>
                <div>
                    {localStorage.getItem("userName") === null && Amplify.Credentials.Auth.user !== null && (
                        <div>
                            {localStorage.setItem("userName", Amplify.Credentials.Auth.user.username)}
                            {localStorage.setItem("userEmail", Amplify.Credentials.Auth.user.attributes.email)}
                            {localStorage.setItem("userPhone", Amplify.Credentials.Auth.user.attributes.phone_number)}
                            {localStorage.getItem("userEmail") === this.state.adminAccount && localStorage.setItem("userAdmin", true)}
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
BookingPage.propTypes = {
    createCustomer: PropTypes.func.isRequired
}
const mapStateProps = state => ({
    errors: state.errors
})
export default connect(
    mapStateProps,
    { createCustomer }
)(withAuthenticator(BookingPage));