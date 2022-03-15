import { createSlice } from "@reduxjs/toolkit";
import { user, lawyer } from "../Data/UserData"

const slice = createSlice({
    name: "singleLawyer",
    initialState: {},
    reducers: {
        SET_Lawyer: (state, action) => {
            return { ...state, ...action.payload };
        },
        Add_Advailabilbity: (state, action) => {
            return {
                ...state,
                data: state.data.append(action.payload)
            }
        },

        book_date: (state, action) => {
            const objIndex = state.data.findIndex((obj => obj.id == action.payload.objectID));
            let newData = state.data
            newData[objIndex].isbooked = true
            return {
                ...state,
                data: newData
            }
        },
        revoke_booking: (state, action) => {
            const objIndex = state.data.findIndex((obj => obj.id == action.payload.objectID));
            let newData = state.data
            newData[objIndex].isbooked = false
            return {
                ...state,
                data: newData
            }
        }

    }
})


export const { SET_Lawyer, Add_Advailabilbity, book_date, revoke_booking } = slice.actions;
export default slice.reducer;