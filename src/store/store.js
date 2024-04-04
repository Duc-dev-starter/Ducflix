import { configureStore } from "@reduxjs/toolkit";

import homeSlice from "./homeSlice";

//configure store dùng để tạo một redux store
export const store = configureStore({
    reducer: {
        home: homeSlice,
    },
});
