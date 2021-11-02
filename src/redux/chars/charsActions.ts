import { CharsActionTypes } from './charsActionTypes'
import { BASE_URL } from 'constants/common'
import { Character } from 'models/Character'
import axios from 'axios'
import { Dispatch } from 'redux'

type Error = string

export type CharactersRequest = {
    type: CharsActionTypes.FETCH_CHARS_REQUEST
}

export type CharactersSuccess = {
    type: CharsActionTypes.FETCH_CHARS_SUCCESS
    payload: Character[]
}

export type CharactersFailure = {
    type: CharsActionTypes.FETCH_CHARS_FAILURE
    payload: Error
}

export type CharactersActions = CharactersRequest | CharactersSuccess | CharactersFailure

export const fetchCharactersRequest = (): CharactersRequest => {
    return {
        type: CharsActionTypes.FETCH_CHARS_REQUEST
    }
}

export const fetchCharactersSuccess = (chars: Character[]): CharactersSuccess => {
    return {
        type: CharsActionTypes.FETCH_CHARS_SUCCESS,
        payload: chars
    }
}

export const fetchCharactersFailure = (error: Error): CharactersFailure => {
    return {
        type: CharsActionTypes.FETCH_CHARS_FAILURE,
        payload: error
    }
}

export const fetchCharacters = () => {
    return (dispatch: Dispatch<CharactersActions>): void => {
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