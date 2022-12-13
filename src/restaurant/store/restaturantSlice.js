import { createSlice } from "@reduxjs/toolkit";
import {fetchRestaurant} from "./restaurant.actions";

const restaurantSlice = createSlice({
    name:"restaurant",
    initialState: {
        restaurant: [],
    },
    reducers:{
        addrestaurant: (state, action) => {
            state.restaurant = action.payload;
          },
    },
    extraReducers:{
        [fetchRestaurant.fulfilled]: (state, action) => {

            state.restaurant = action.payload;
        }
    }
})

export const { addrestaurant } = restaurantSlice.actions

export default restaurantSlice.reducer