import axios from "axios";
import { CREATE_STAFF, STAFF_ERROR, CREATE_SALON_SCHEDULE, SALON_SCHEDULE_ERROR } from "./types";

export const createStaff = (staff) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:8080/staff/save", staff);
        dispatch({
            type: CREATE_STAFF,
            payload: { message: staff.staffName + " has been successfully saved." }
        });
    } catch (err) {
        dispatch({
            type: STAFF_ERROR,
            payload: err.response.data
        });
    }
}

export const createSalonSchedule = (salonSchedule) => async dispatch => {
    try {
        const res = await axios.post(process.env.REACT_APP_ADDRESS + ":8080/salon/schedule/save", salonSchedule);
        dispatch({
            type: CREATE_SALON_SCHEDULE,
            payload: { message: salonSchedule.staffName + " has been successfully saved." }
        });
    } catch (err) {
        dispatch({
            type: SALON_SCHEDULE_ERROR,
            payload: err.response.data
        });
    }
}
