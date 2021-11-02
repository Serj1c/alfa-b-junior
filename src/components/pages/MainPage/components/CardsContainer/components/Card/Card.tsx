import React from 'react'
import { Character } from 'models/Character'
import styles from './Card.module.css'

interface Props {
    item: Character
}

export const Card: React.FunctionComponent<Props> = ({ item }): JSX.Element => {
    return (
        <div className={styles.card}>
            <img src={item.img} alt="portrait"/>
            <ul>
                <li>
                    <span>Name: {item.name}</span>
                </li>
                <li>
                    <span>Actor: {item.portrayed}</span>
                </li>
            </ul>
        </div>
    )
}
