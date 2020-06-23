import React from 'react'

import VehicleIconStyles from './VehicleIcon.styles'
import { ReactComponent as Car } from '../../../asets/images/car.svg'
import { ReactComponent as Bike } from '../../../asets/images/bike.svg'

const displayIcon = type => {
    switch (type) {
        case 'car':
            return <Car />
            break;
        case 'bike':
            return <Bike />
            break;
        default:
            return <Car />
            break;
    }
}

const VehicleIcon = ({type}) => {
    return  <VehicleIconStyles>
                {displayIcon(type)}  
            </VehicleIconStyles>
};

export default VehicleIcon
