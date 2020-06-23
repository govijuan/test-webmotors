import React from 'react'

import SelectBuyTXTStyles from './SelectBuyTXT.styles'

const SelectBuyTXT = ({vehicleTypeTxt}) => {
    return  <SelectBuyTXTStyles>
                <div className="buy-txt">Comprar</div>
                <div className="vehicle-type-txt">{vehicleTypeTxt}</div>
            </SelectBuyTXTStyles>
};

export default SelectBuyTXT
