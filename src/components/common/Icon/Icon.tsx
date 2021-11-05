import React from 'react'
import styles from './Icon.module.css'
import { ReactComponent as ThumbUpIcon } from './resources/ThumbUp.svg'
import { ReactComponent as ThumbUpFilledIcon } from './resources/ThumbUpFilled.svg'
import { ReactComponent as FilterIcon } from './resources/Filter.svg'
import { ReactComponent as FilterOffIcon } from './resources/FilterOff.svg'
import { ReactComponent as TrashBinIcon } from './resources/TrashBin.svg'

interface Props {
    type: 'ThumbUp' | 'ThumbUpFilled' | 'Filter' | 'FilterOff' | 'TrashBin'
    size?: 's' | 'm' | 'l' | 'xl' | 'xxl'
} 

export const Icon: React.FunctionComponent<Props> = ({type, size='m'}): JSX.Element => {

    const className = styles[`root_size_${size}`]

    switch (type) {
        case 'ThumbUp': {
            return <ThumbUpIcon className={className}/>
        }
        case 'ThumbUpFilled': {
            return <ThumbUpFilledIcon className={className}/>
        }
        case 'Filter': {
            return <FilterIcon className={className}/>
        }
        case 'FilterOff': {
            return <FilterOffIcon className={className}/>
        }
        case 'TrashBin': {
            return <TrashBinIcon className={className}/>
        }
    }
}
