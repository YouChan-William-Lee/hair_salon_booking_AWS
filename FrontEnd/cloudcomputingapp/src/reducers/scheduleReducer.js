import { GET_SALONSCHEDULE } from "../actions/types"

const initialState = {
    salonSchedule: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_SALONSCHEDULE:
            return {
                ...state,
                salonSchedule: action.payload
            };
        default:
            return state;
    }
}