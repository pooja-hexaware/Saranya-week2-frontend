import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchMenu = createAsyncThunk("fetchMenu/menu",async()=>{

    const result = await axios.get("http://localhost:3001/menu");
    return result.data;
}
)

