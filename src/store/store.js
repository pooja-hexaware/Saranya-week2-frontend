import { configureStore } from '@reduxjs/toolkit'
import menuReducer from "../menu/store/menuSlice"
import restaurantReducer from "../restaurant/store/restaturantSlice"
import { createLogger } from 'redux-logger'
import { cartReducer } from '../cart/store/cartSlice'
let middlewares = []
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: (getState, action, logEntry) => !logEntry.error,
    })
    middlewares.push(logger)
}
export default configureStore({
    reducer: {
        
      menu:menuReducer,
      rest:restaurantReducer,
      cart:cartReducer
    },
    
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
})
