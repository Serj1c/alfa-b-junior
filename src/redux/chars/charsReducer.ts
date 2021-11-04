import { CharsActionTypes } from './charsActionTypes'
import { CharactersActions } from './charsActions'
import { Character } from 'models/Character'

export type initialStateType = {
    isLoading: boolean,
    chars: Character[] | null,
    error: string,
    isLoaded: boolean
}

export const initialState: initialStateType = {
    isLoading: false,
    chars: null,
    error: '',
    isLoaded: false
}

export const charsReducer = (state = initialState, action: CharactersActions): initialStateType => {
    switch(action.type) {
        case CharsActionTypes.FETCH_CHARS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case CharsActionTypes.FETCH_CHARS_SUCCESS: {
            return {
                isLoading: false,
                chars: action.payload,
                error: '',
                isLoaded: true
            }
        }
        case CharsActionTypes.FETCH_CHARS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                chars: null,
                error: action.payload,
                isLoaded: false
            }
        }
        case CharsActionTypes.DELETE_CHAR: {
            return {
                ...state,
                chars: state.chars.filter(char => char.char_id !== action.payload)
            }
        }
        default: return state
    }
}