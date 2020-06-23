import styled from 'styled-components'
import { colors } from '../../templates/values'

const VehicleTypeSelectBTNStyles = styled.div`
    display: flex;
    padding: 15px;
    border-bottom: 2px solid ${colors.lightGrey};
    color: ${colors.grey};
    &.selected-type{
        border-color: ${colors.red}
    }
`

export default VehicleTypeSelectBTNStyles;
