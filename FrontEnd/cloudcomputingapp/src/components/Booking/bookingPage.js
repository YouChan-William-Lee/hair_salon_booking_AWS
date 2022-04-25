import React, {Component} from 'react';
import DatePicker from 'sassy-datepicker';
import BookingPageService from '../Booking/bookingPageService';
import Amplify from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "../../configs/awsconfig";
import { createCustomer } from "../../actions/customerActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../../styleSheets/bookingPage.css"

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
        fetch("http://52.206.86.192:8080/salon/schedule").then((response) => response.json()).then(result => {
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
                window.location.reload();
            }
            else if (localStorage.getItem("userEmail") === this.state.adminAccount && localStorage.getItem("refresh") === null) {
                localStorage.setItem("refresh", "Done");
                window.location.reload();
            }
        }
    }

    render() {
        var today = new Date();
        var maxDay = new Date(new Date().setDate(today.getDate() + 30));
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
                                        maxDate={maxDay} />
                            <br />
                            <BookingPageService selectedDate={this.state.date.getDate()}
                                                selectedYearMonthDate={String(this.state.date.getFullYear())+"-"+String(this.state.date.getMonth()+1).padStart(2,"0")+"-"+String(this.state.date.getDate()).padStart(2,"0")}
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