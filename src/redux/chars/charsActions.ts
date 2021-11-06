import { CharsActionTypes } from './charsActionTypes'
import { BASE_URL } from 'constants/common'
import { Character } from 'models/Character'
import axios from 'axios'
import { Dispatch } from 'redux'

type Error = string

export type CharactersRequestType = {
    type: CharsActionTypes.FETCH_CHARS_REQUEST
}

export type CharactersSuccessType = {
    type: CharsActionTypes.FETCH_CHARS_SUCCESS
    payload: Character[]
}

export type CharactersFailureType = {
    type: CharsActionTypes.FETCH_CHARS_FAILURE
    payload: Error
}

export type DeleteCharacterType = {
    type: CharsActionTypes.DELETE_CHAR
    payload: Character["char_id"]
}

export type LikeCharacterType = {
    type: CharsActionTypes.LIKE_CHAR
    payload: Character["char_id"]
}

export type FilterLikedCharactersType = {
    type: CharsActionTypes.FILTER_LIKED_CHARS
}

export type CharactersActions = CharactersRequestType | CharactersSuccessType | CharactersFailureType 
| LikeCharacterType | DeleteCharacterType | FilterLikedCharactersType

export const fetchCharactersRequest = (): CharactersRequestType => {
    return {
        type: CharsActionTypes.FETCH_CHARS_REQUEST
    }
}

export const fetchCharactersSuccess = (chars: Character[]): CharactersSuccessType => {
    return {
        type: CharsActionTypes.FETCH_CHARS_SUCCESS,
        payload: chars
    }
}

export const fetchCharactersFailure = (error: Error): CharactersFailureType => {
    return {
        type: CharsActionTypes.FETCH_CHARS_FAILURE,
        payload: error
    }
}

export const fetchCharacters = () => {
    return (dispatch: Dispatch<CharactersActions>) => {
        dispatch(fetchCharactersRequest())
        axios.get<Character[]>(BASE_URL)
        .then(response => {
            const chars = response.data
            dispatch(fetchCharactersSuccess(chars))})
        .catch(error => {
            const errMsg = error.message
            dispatch(fetchCharactersFailure(errMsg))
        })
    }
}

export const deleteCharacter = (id: Character["char_id"]): DeleteCharacterType => {
    return {
        type: CharsActionTypes.DELETE_CHAR,
        payload: id
    }
}

export const likeCharacter = (id: Character["char_id"]): LikeCharacterType => {
    return {
        type: CharsActionTypes.LIKE_CHAR,
        payload: id
    }
}

export const filterLikedCharacters = (): FilterLikedCharactersType => {
    return {
        type: CharsActionTypes.FILTER_LIKED_CHARS
    }
}