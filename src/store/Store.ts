import {configureStore} from "@reduxjs/toolkit";
import FieldSlice from "../reducers/FieldSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";
import StaffSlice from "../reducers/StaffSlice.ts";


const store = configureStore({
    reducer: {
        staff: StaffSlice,
        field: FieldSlice,
        vehicle: VehicleSlice
    }
});

export default store;