import React from 'react'
import spinner from './assets/spinner.gif'

export const Spinner: React.FunctionComponent = (): JSX.Element => {
    return (
        <img
            src={spinner}
            alt="Loading"
            style={{ width: '200px', margin: 'auto', display: 'block' }} 
        />
    )
}
