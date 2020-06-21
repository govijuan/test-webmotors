import React from 'react'
import logo from '../../../asets/images/logo.svg'
import HeaderStyles from './Header.styles'

const Header = () => {
    return  <HeaderStyles>
                <img src={logo} alt="Logo" />
            </HeaderStyles>
};

export default Header
