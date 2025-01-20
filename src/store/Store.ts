import {configureStore} from "@reduxjs/toolkit";
import StaffSliceReducer from "../reducers/StaffSlice.ts";
import FieldSlice from "../reducers/FieldSlice.ts";


const store = configureStore({
    reducer: {
        staffSlice: StaffSliceReducer,
        field: FieldSlice,
    }
});

export default store;