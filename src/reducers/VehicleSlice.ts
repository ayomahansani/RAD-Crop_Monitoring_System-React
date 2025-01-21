import {createSlice} from "@reduxjs/toolkit";
import {Vehicle} from "../models/vehicle.ts";

const initialState: Vehicle[] = [];

const vehicleSlice = createSlice({
    name: "vehicle",
    initialState,
    reducers: {
        addVehicle: (state, action) => {

        },
        updateVehicle: (state, action) => {

        },
        deleteVehicle: (state, action) => {

        }
    }
});

export const {addVehicle, updateVehicle, deleteVehicle} = vehicleSlice.actions;
export default vehicleSlice.reducer;