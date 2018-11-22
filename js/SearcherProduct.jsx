import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/style.scss'
import SearchBar from './SearchBar.jsx'

class SearcherProduct extends React.Component{
    render(){
        return(
            <div className="sectionControlBar">
                <SearchBar
                        filterText={this.props.filterText}
                        setFilterTextProps={this.props.setFilterTextProps}
                    />
            </div>
        )
    }    
}
export default SearcherProduct;