import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/ChoseProductList.scss'

class ChoseProductList extends React.Component{ //
    //props setOnlnyHandguns,handguns,
    handleHandguns =()=>{
     this.props.setOnlnyHandguns(!this.props.handguns)
    }
    handleRifles = () => {
            this.props.setOnlnyRifles(!this.props.rifles)

        }
    render(){
        return(
            <div className='ChoseProductList'>
                <ul> products
                    <li onClick={this.handleHandguns} style={{backgroundColor:this.props.handguns ? 'green' : 'red'}}>Handguns</li>
                    <li onClick={this.handleRifles} style={{backgroundColor:this.props.rifles ? 'green' : 'red'}}>Rifles</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                </ul>
            </div>
        )
    }
}
export default ChoseProductList;