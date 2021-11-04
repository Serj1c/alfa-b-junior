import React, { useCallback } from 'react'
import { Character } from 'models/Character'
import { Button, Icon } from 'components/common'
import styles from './Card.module.css'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import { CharactersActions, deleteCharacter, likeCharacter } from 'redux/chars/charsActions'

interface Props {
    item: Character
}

export const Card: React.FunctionComponent<Props> = ({ item }): JSX.Element => {

    const dispatch = useDispatch<Dispatch<CharactersActions>>()

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
                <Button onClick={handleLike}>
                    <Icon type="ThumbUp" size="l" />
                </Button>
                <Button onClick={handleDelete}>
                    <Icon type="TrashBin" size="l" />
                </Button>
            </div>
        </div>
    )
}
