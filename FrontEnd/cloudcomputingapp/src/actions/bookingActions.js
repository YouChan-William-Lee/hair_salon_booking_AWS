import axios from "axios";
import { UPDATE_BOOKING_STATUS, BOOKING_ERROR } from "./types";

export const createBooking = (salonBooking) => async dispatch => {
    try {
        const res = await axios.post("http://ec2-54-162-125-71.compute-1.amazonaws.com:8080/salon/booking/save", salonBooking);
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