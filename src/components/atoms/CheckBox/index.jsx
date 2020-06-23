import React from 'react'

import {Check} from '@styled-icons/boxicons-regular/Check'
import  { CheckBoxStyles, HiddenCheckbox, StyledCheckBox, CheckBoxLabel} from './CheckBox.styles'

const CheckBox = ({className, checked, labelTxt, ...props}) => {
    return  <CheckBoxStyles className={className}>
                <HiddenCheckbox checked={checked} {...props}/>
                <StyledCheckBox checked={checked} {...props}>
                    <Check />
                </StyledCheckBox>
            <CheckBoxLabel>{labelTxt}</CheckBoxLabel>
            </CheckBoxStyles>
};

export default CheckBox
