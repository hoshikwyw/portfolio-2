import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const sidebarSlice = createSlice({
    name: "sidebarSlice",
    initialState,
    reducers: {
        setActive: (state,{payload}) => {
            state.value = payload
        }
    }
})

export const {setActive} = sidebarSlice.actions;
export default sidebarSlice.reducer;