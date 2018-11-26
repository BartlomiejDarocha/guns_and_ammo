import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/ChoseProductList.scss'

class ChoseProductList extends React.Component{ //
    //props setOnlnyHandguns,handguns,//setOnlnyRifles,rifles
    //setOnlnyShotguns ,Shotguns // setOnlnyAmmunition ,Ammunition
    handleHandguns =()=>{
     this.props.setOnlnyHandguns(!this.props.flag)
    }
    handleRifles = () => {
            this.props.setOnlnyRifles(!this.props.flag)
    }
    handleShotguns = () => {
        this.props.setOnlnyShotguns(!this.props.flag)
    }
    handleAmmunition = () => {
        this.props.setOnlnyAmmunition(!this.props.flag)
    }      
    render(){
        return(
            <div className='ChoseProductList'>
                <ul>
                    <li onClick={this.handleHandguns} style={{backgroundColor:this.props.handguns===false&&this.props.flag===true ? 'red' : 'transparent'}}>Handguns</li>
                    <li onClick={this.handleRifles} style={{backgroundColor:this.props.rifles===false&&this.props.flag===true ? 'red' : 'transparent'}}>Rifles</li>
                    <li onClick={this.handleShotguns} style={{backgroundColor:this.props.Shotguns===false&&this.props.flag===true ? 'red' : 'transparent'}}>Shotguns</li>
                    <li onClick={this.handleAmmunition} style={{backgroundColor:this.props.Ammunition===false&&this.props.flag===true ? 'red' : 'transparent'}}>Ammunition</li>
                    <li>Bows</li>
                    <li>Scopes</li>
                    <li>Accessories</li>
                </ul>
            </div>
        )
    }
}
export default ChoseProductList;