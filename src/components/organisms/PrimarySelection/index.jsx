import React from 'react'

import PrimarySelectionStyles from './PrimarySelection.styles'
import VehicleTypeSelectBTN from '../../molecules/VehicleTypeSelectBTN'
import SellVehicleBTN from '../../atoms/SellVehicleBTN'

const PrimarySelection = ({}) => {
    return  <PrimarySelectionStyles>
                <VehicleTypeSelectBTN vehicleTypeTxt='Carros' type='car'/>
                <VehicleTypeSelectBTN vehicleTypeTxt='Motos' type='bike'/>
                <SellVehicleBTN />
            </PrimarySelectionStyles>
};

export default PrimarySelection
