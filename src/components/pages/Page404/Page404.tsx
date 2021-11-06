import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from 'components/common'
import styles from './Page404.module.css'

export const Page404: React.FunctionComponent = (): JSX.Element => {
    return (
        <>
            <Header />
            <div className={styles.root}>
                <h2>404</h2>
                <p>It seems that we have not found what you were looking for</p>
                <p>You may go to <Link to="/" className={styles.root_link}>home page</Link></p>
            </div> 
        </>
    )
}
