import React from 'react'

import VehicleTypeSelectBTNStyles from './VehicleTypeSelectBTN.styles'
import VehicleIcon from '../../atoms/VehicleIcon'
import SelectBuyTXT from '../../atoms/SelectBuyTXT'

const VehicleTypeSelectBTN = ({vehicleTypeTxt, type}) => {
    return  <VehicleTypeSelectBTNStyles >
                <VehicleIcon type={type} />
                <SelectBuyTXT vehicleTypeTxt={vehicleTypeTxt} />
            </VehicleTypeSelectBTNStyles>
};

export default VehicleTypeSelectBTN
