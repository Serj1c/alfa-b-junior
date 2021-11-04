import React from 'react'
import classNames from 'classnames' 
import styles from './Button.module.css'


export const Button: React.FunctionComponent<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => {

    const buttonClassName = classNames(styles.root,{[styles.root_flex]: children})

    return (
        <button className={buttonClassName} {...props}>{children}</button>
    )
}