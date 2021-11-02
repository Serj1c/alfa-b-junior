import { combineReducers } from 'redux'
import { charsReducer } from './indexReducers'

export const rootReducer = combineReducers({
    chars: charsReducer
})

type RootReducerType = typeof rootReducer

export type AppStateType = ReturnType<RootReducerType>