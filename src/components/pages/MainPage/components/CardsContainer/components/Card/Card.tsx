import React, { useCallback } from 'react'
import { Character } from 'models/Character'
import { Button, Icon } from 'components/common'
import styles from './Card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import { CharactersActions, deleteCharacter, likeCharacter } from 'redux/chars/charsActions'
import { AppStateType } from 'redux/rootReducer'

interface Props {
    item: Character
}

export const Card: React.FunctionComponent<Props> = ({ item }): JSX.Element => {

    const dispatch = useDispatch<Dispatch<CharactersActions>>()
    const liked = useSelector((state: AppStateType) => state.chars.chars.find(char => char.char_id === item.char_id && char.isLiked))

    const handleDelete = useCallback(() => {
        dispatch(deleteCharacter(item.char_id))
    },[dispatch, item.char_id])

    const handleLike = useCallback(() => {
        dispatch(likeCharacter(item.char_id))
    }, [dispatch, item.char_id])

    return (
        <div className={styles.card}>
            <img src={item.img} alt="portrait"/>
            <div className={styles.card_bottom}>
                <Button design="default" onClick={handleLike}>
                    {liked ? <Icon type="ThumbUpFilled" size="l" /> : <Icon type="ThumbUp" size="l" />}
                </Button>
                <Button design="caution" onClick={handleDelete}>
                    <Icon type="TrashBin" size="l" />
                </Button>
            </div>
        </div>
    )
}
