import React, {Component} from 'react'

import PrimarySelection from '../../organisms/PrimarySelection'
import SearchForm from '../../organisms/SearchForm'

class SearchPage extends Component {

    render(){
        return(

            <div>
                <PrimarySelection />
                <SearchForm />
            </div>
        )
    }

}

export default SearchPage