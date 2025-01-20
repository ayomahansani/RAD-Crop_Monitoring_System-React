import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    staffs: [
        {
            firstName: "Ayoma",
            lastName: "Hansani",
            address: "Makola",
            phone: "0751838333",
            email: "ayo@gmail.com",
            joinDate: "03-09-2020",
            birth: "11-03-2001",
        },
    ],
};

const staffSlice = createSlice({
    name: "staff",
    initialState,
    reducers: {
        addStaff: (state, action) => {
            state.staffs.push(action.payload);
        },
        updateStaff: (state, action) => {
            const index = state.staffs.findIndex(
                (staff) => staff.email === action.payload.email
            );
            if (index !== -1) {
                state.staffs[index] = action.payload;
            }
        },
        deleteStaff: (state, action) => {
            state.staffs = state.staffs.filter(
                (staff) => staff.email !== action.payload.email
            );
        },
    },
});

export const { addStaff, updateStaff, deleteStaff } = staffSlice.actions;
export default staffSlice.reducer;
