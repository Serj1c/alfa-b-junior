import React, { useEffect, useState } from 'react'
import { CardsContainer } from './components'
import { Header } from 'components/common'
import axios from 'axios'
import { BASE_URL } from 'constants/common'
import { Character } from 'models/Character'

export const MainPage: React.FunctionComponent = (): JSX.Element => {

    const [items, setItems] = useState<Character[] | null>()

    useEffect(() => {
        const fetchItems = async () => {
          const result = await axios.get(BASE_URL)
          console.log(result.data)
          setItems(result.data)
        }
        fetchItems()
    }, [])

    return (
        <>
            <Header />
            <CardsContainer items={items} />
        </>
    )
}
