import styled from 'styled-components'
import {colors} from '../../templates/values'

const CheckBoxStyles = styled.div`
    display: inline-flexbox;
    margin-right: 30px;
`
const StyledCheckBox = styled.div`
    display: inline-block;
    border-radius: 2px;
    border: 1px solid ${colors.grey};
    height: 20px;
    width: 20px;
`
const CheckBoxLabel = styled.label`
 padding-left: 10px;
`

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export  { CheckBoxStyles, HiddenCheckbox, StyledCheckBox, CheckBoxLabel };
