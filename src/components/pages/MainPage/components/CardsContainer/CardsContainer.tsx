import React from 'react'
import { Card } from './components'
import { Character } from 'models/Character'
import styles from './CardsContainer.module.css'

interface Props {
    chars: Character[]
}

export const CardsContainer: React.FunctionComponent<Props> = ({ chars }): JSX.Element => {
    return (
        <section className={styles.root}>
            {chars && chars.map(char => (
                <Card item={char} key={char.char_id} />
            ))}
        </section>
    )
}
