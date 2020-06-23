import React from 'react'

import SearchFormStyles from './SearchForm.styles'
import FormGroupContainer from '../../atoms/FormGroupContainer'
import CheckBox from '../../atoms/CheckBox'

const SearchForm = ({}) => {
    return  <SearchFormStyles>
                <FormGroupContainer>
                    <CheckBox labelTxt='Novos' />
                    <CheckBox labelTxt='Usados' />
                </FormGroupContainer>
            </SearchFormStyles>
};

export default SearchForm
