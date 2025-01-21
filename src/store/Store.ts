import {configureStore} from "@reduxjs/toolkit";
import StaffSliceReducer from "../reducers/StaffSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";
import VehicleSlice from "../reducers/VehicleSlice.ts";


const store = configureStore({
    reducer: {
        staffSlice: StaffSliceReducer,
        field: FieldSlice,
        vehicle: VehicleSlice
    }
});

export default store;