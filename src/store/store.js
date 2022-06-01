import { createStore } from 'redux'
import { combineReducers } from 'redux'


// reducer

// const ACTION_TYPE = {
//     SET_TIMER: 'SET_TIMER'
// }





const INITIAL_STATE = {
    timer: localStorage.timer ? JSON.parse(localStorage.timer) : 0,
    isTimerOn: false

}

const timerReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action

    switch (type) {
        case 'SET_TIMER':
            return {
                ...state,
                timer: payload
            }
            case 'SET_IS_TIMER_ON':
                return{
                    ...state,
                    isTimerOn: payload
                }
        default:
            return state
    }
}


//root reducer

const rootReducer = combineReducers({
    timerReducer
})


// store


export const store = createStore(rootReducer)