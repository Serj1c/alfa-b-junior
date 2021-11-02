import React from 'react'
import logo from './resourses/logo.png'
import styles from './Header.module.css'

export const Header: React.FunctionComponent = (): JSX.Element => {
    return (
        <header className={styles.root}>
            <img src={logo} alt="" className={styles.root_img}/>
        </header>
    )
}
