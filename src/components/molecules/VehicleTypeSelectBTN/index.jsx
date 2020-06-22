import React from 'react'

import VehicleTypeSelectBTNStyles from './VehicleTypeSelectBTN.styles'
import VehicleIcon from '../../atoms/VehicleIcon'
import SelectBuyTXT from '../../atoms/SelectBuyTXT'

const VehicleTypeSelectBTN = ({}) => {
    return  <VehicleTypeSelectBTNStyles>
                <VehicleIcon />
                <SelectBuyTXT vehicleTypeTxt='Carros'/>
            </VehicleTypeSelectBTNStyles>
};

export default VehicleTypeSelectBTN
