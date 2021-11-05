import React from 'react'
import classNames from 'classnames' 
import styles from './Button.module.css'

export type ButtonDesign = 'primary' | 'caution' | 'default'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    design: ButtonDesign;
}

export const Button: React.FunctionComponent<Props> = ({ children, design, ...props }) => {

    const buttonClassName = classNames(styles.root, styles.root_flex, styles[`root_design_${design}`])

    return (
        <button className={buttonClassName} {...props}>{children}</button>
    )
}