import React from 'react'
import { Character } from 'models/Character'
import { Icon } from 'components/common'
import styles from './Card.module.css'

interface Props {
    item: Character
}

export const Card: React.FunctionComponent<Props> = ({ item }): JSX.Element => {
    return (
        <div className={styles.card}>
            <img src={item.img} alt="portrait"/>
            <div className={styles.card_bottom}>
                <Icon type="ThumbUp" size="l"/>
                <Icon type="TrashBin" size="l" />
            </div>
        </div>
    )
}
