import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/style.scss'

class SearchBar extends React.Component {// props setFilterTextProps , filterText
        handlerText = (e) => {
            this.props.setFilterTextProps(e.target.value)
        }
        // handlerBox1 = () => {
        //     this.props.setOnlnyHandguns(!this.props.handguns)
        // }
        // handlerBox2 = () => {
        //     this.props.setOnlnyRifles(!this.props.rifles)
        //     console.log(this.props.rifles)
        // }
        render() {
            return (
                <form >
                    <input className="sercher" onChange={this.handlerText} type="text" size="50" value={this.props.filterText} placeholder="Search..." />
                    {/* <input onChange={this.handlerBox1} type="checkbox" value={this.props.handguns} checked={this.props.handguns ? true : false} /><label>handguns</label>
                    <input onChange={this.handlerBox2} type="checkbox" value={this.props.refiles} checked={this.props.rifles ? true : false} /><label>rifles</label> */}
                </form>
            )
        }
    }
    export default SearchBar