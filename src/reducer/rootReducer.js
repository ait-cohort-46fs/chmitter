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


export const rootReducer = (state, action) => {
    return {
        user: userReducer(state.user, action),
        stats: statsReducer(state.stats, action)
    }
}