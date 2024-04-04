import { createSlice } from "@reduxjs/toolkit";

//slice chia nhỏ ứng dụng thành các thành phần nhỏ hơn, mỗi phần quản lý một phần của trạng thái ứng dụng và logic xử lý action tương úng với phần đó của trạng thái
//chứa logic xử  lý action và reducer
export const homeSlice = createSlice({
    name: "home",
    initialState: {
        url: {},
        genres: {},
    },
    reducers: {
        //khi gọi thằng này nó sẽ trả ra action có dạng 
        //{type: 'home/getApiConfiguration',
        // payload: apiConfig(một cái url)                            
        // }
        //khi action này được xử lí bởi reducer, action.payload sẽ chính là apiConfig
        getApiConfiguration: (state, action) => {
            state.url = action.payload;
        },
        getGenres: (state, action) => {
            state.genres = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getApiConfiguration, getGenres } = homeSlice.actions;

export default homeSlice.reducer;
