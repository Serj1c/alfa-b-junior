import React from 'react'
import { Card } from './components'
import { Character } from 'models/Character'
import styles from './CardsContainer.module.css'

interface Props {
    items: Character[]
}

export const CardsContainer: React.FunctionComponent<Props> = ({ items }): JSX.Element => {
    return (
        <section className={styles.root}>
            {items && items.map(item => (
                <Card item={item} key={item.char_id} />
            ))}
        </section>
    )
}
