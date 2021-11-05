import React, { useCallback, useEffect } from 'react'
import { CardsContainer } from './components'
import { Spinner } from 'components/common'
import { Header, Icon, Button } from 'components/common'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters, filterLikedCharacters } from 'redux/chars/charsActions'
import { AppStateType } from 'redux/rootReducer'
import styles from './MainPage.module.css'

export const MainPage: React.FunctionComponent = (): JSX.Element => {

    const dispatch = useDispatch()
    const chars = useSelector((state:AppStateType) => state.chars.chars)

	useEffect(() => {
		try {
			dispatch(fetchCharacters())
		} catch (error) {
			console.log(error)
		}
    }, [dispatch])
    
    const handleFilter = useCallback(() => {
        dispatch(filterLikedCharacters())
    }, [dispatch])

    return (
        <>
            <Header />
            <section className={styles.root}>
                <Button design="primary" onClick={handleFilter}>
                    <span>Only liked</span><Icon type="Filter" size="l" />
                </Button>
            </section>
            {chars ? <CardsContainer chars={chars} /> : <Spinner />}
        </>
    )
}
