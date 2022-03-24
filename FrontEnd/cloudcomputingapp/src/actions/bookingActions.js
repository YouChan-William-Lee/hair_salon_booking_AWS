import axios from "axios"
import { UPDATE_BOOKING_STATUS, BOOKING_ERROR } from "./types"

export const createBooking = (salonBooking) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/salon/booking", salonBooking);
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