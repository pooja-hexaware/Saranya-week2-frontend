import { createSlice } from "@reduxjs/toolkit";
import {fetchMenu} from "./menu.actions";

const menuSlice = createSlice({
    name:"menu",
    initialState: {
        menu: [],
    },
    reducers:{
        addmenu: (state, action) => {
            state.menu = action.payload;
          },
    },
    extraReducers:{
        [fetchMenu.fulfilled]: (state, action) => {

            state.menu = action.payload;
        }
    }
})

export const { addmenu } = menuSlice.actions

export default menuSlice.reducer