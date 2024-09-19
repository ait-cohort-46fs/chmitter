import { combineReducers } from "redux"
import { statsReducer } from "./statsReducer"
import { userReducer } from "./userReducer"

/*
type State = {
    user:{
        name: string,
        avatar: string
    },
    stats:{
        followers: number,
        following: number
    }
}
*/


export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})