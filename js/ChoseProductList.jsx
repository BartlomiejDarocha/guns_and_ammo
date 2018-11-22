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
    handleShotguns = () => {
        this.props.setOnlnyRifles(!this.props.rifles)
    }
    handleAmmunition = () => {
        this.props.setOnlnyRifles(!this.props.rifles)
    }      
    render(){
        return(
            <div className='ChoseProductList'>
                <ul>
                    <li onClick={this.handleHandguns} style={{backgroundColor:this.props.handguns ? 'transparent' : 'red'}}>Handguns</li>
                    <li onClick={this.handleRifles} style={{backgroundColor:this.props.rifles ? 'transparent' : 'red'}}>Rifles</li>
                    <li onClick={this.handleShotguns} style={{backgroundColor:this.props.Shotguns ? 'transparent' : 'red'}}>Shotguns</li>
                    <li onClick={this.handleAmmunition} style={{backgroundColor:this.props.Ammunition ? 'transparent' : 'red'}}>Ammunition</li>
                    <li>Bows</li>
                    <li>Scopes</li>
                    <li>Accessories</li>
                </ul>
            </div>
        )
    }
}
export default ChoseProductList;