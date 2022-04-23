import axios from "axios";
import { UPDATE_BOOKING_STATUS, BOOKING_ERROR } from "./types";

export const createBooking = (salonBooking) => async dispatch => {
    try {
        const res = await axios.post("http://52.206.86.192:8080/salon/booking/save", salonBooking);
        dispatch({
            type: UPDATE_BOOKING_STATUS,
            payload: { message: salonBooking.customerName + " has been successfully booked." }
        });
    } catch (err) {
        dispatch({
            type: BOOKING_ERROR,
            payload: err.response.data
        });
    }
}

export const bookingConfirmationCustomer = (bookingInfo) => async dispatch => {
    try {
        const res = await axios({
            method: "POST",
            headers: {"Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control_allow_headers": "Origin, X-Requested-With, Content-Type, Accept",
                "X-Requested-With": "XMLHttpRequest"},
            url: "https://cors-anywhere.herokuapp.com/https://xgb2ocvcej.execute-api.us-east-1.amazonaws.com/whs_booking/whs",
            data: bookingInfo
        });
    } catch (err) {
        dispatch({
            type: BOOKING_ERROR,
            payload: err.response.data
        });
    }
}

export const bookingConfirmationStaff = (bookingInfo) => async dispatch => {
    try {
        const res = await axios({
            method: "POST",
            headers: {"Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000",
                "Access-Control_allow_headers": "Origin, X-Requested-With, Content-Type, Accept",
                "X-Requested-With": "XMLHttpRequest"},
            url: "https://cors-anywhere.herokuapp.com/https://xgb2ocvcej.execute-api.us-east-1.amazonaws.com/whs_booking/whs",
            data: bookingInfo
        });
    } catch (err) {
        dispatch({
            type: BOOKING_ERROR,
            payload: err.response.data
        });
    }
}