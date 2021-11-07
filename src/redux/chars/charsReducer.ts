import { CharsActionTypes } from './charsActionTypes'
import { CharactersActions } from './charsActions'
import { Character } from 'models/Character'

export type initialStateType = {
    isLoading: boolean,
    chars: Character[] | null,
    error: string,
    isLoaded: boolean,
    appliedLikeFilter: boolean,
    filteredChars: Character[] | null
}

export const initialState: initialStateType = {
    isLoading: false,
    chars: null,
    error: '',
    isLoaded: false,
    appliedLikeFilter: false,
    filteredChars: null
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
                ...state,
                isLoading: false,
                chars: action.payload,
                filteredChars: action.payload,
                error: '',
                isLoaded: true
            }
        }
        case CharsActionTypes.FETCH_CHARS_FAILURE: {
            return {
                ...state,
                isLoading: false,
                chars: null,
                filteredChars: null,
                error: action.payload,
                isLoaded: false
            }
        }
        case CharsActionTypes.DELETE_CHAR: {
            let afterDeletion = state.chars.filter(char => char.char_id !== action.payload)
            state.filteredChars = afterDeletion
            state.chars = afterDeletion
            return {
                ...state
            }
        }
        case CharsActionTypes.LIKE_CHAR: {
            let char = state.chars.find(item => item.char_id === action.payload)
            char.isLiked = !char.isLiked
            state.filteredChars = state.chars
            return {
                ...state
            }
        }
        case CharsActionTypes.FILTER_LIKED_CHARS: {
            if (state.appliedLikeFilter) {
                state.appliedLikeFilter = false
                state.filteredChars = state.chars
                return {
                    ...state
                }
            } else {
                state.appliedLikeFilter = true
                let filtered = state.chars.filter(char => char.isLiked === true)
                state.filteredChars = filtered
                return {
                    ...state
                }
            }
        }
        default: return state
    }
}