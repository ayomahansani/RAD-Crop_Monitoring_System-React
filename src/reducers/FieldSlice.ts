import {createSlice} from "@reduxjs/toolkit";
import {Field} from "../models/field.ts";

const initialState: Field[] = [];

const fieldSlice = createSlice({
    name: "field",
    initialState,
    reducers: {
        addField: (state, action) => {

        },
        updateField: (state, action) => {

        },
        deleteField: (state, action) => {

        },
    },
});

export const {addField, updateField, deleteField} = fieldSlice.actions;
export default fieldSlice.reducer;