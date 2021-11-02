import React, { useEffect, useState } from 'react'
import { CardsContainer } from './components'
import { Header } from 'components/common'
import axios from 'axios'
import { BASE_URL } from 'constants/common'
import { Character } from 'models/Character'
import { useDispatch } from 'react-redux'
import { fetchCharacters } from 'redux/chars/charsActions'

export const MainPage: React.FunctionComponent = (): JSX.Element => {

    const [items, setItems] = useState<Character[] | null>()

    useEffect(() => {
        const fetchItems = async () => {
          const result = await axios.get(BASE_URL)
          setItems(result.data)
        }
        fetchItems()
    }, [])

    const dispatch = useDispatch()

	useEffect(() => {
		try {
			dispatch(fetchCharacters())
		} catch (error) {
			console.log(error)
		}
	}, [dispatch])

    return (
        <>
            <Header />
            <CardsContainer items={items} />
        </>
    )
}
