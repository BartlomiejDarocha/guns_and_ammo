import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import SearcherProduct from './SearcherProduct.jsx';
import ChoseProductList from './ChoseProductList.jsx';
import MiddleSection from './MiddleSection.jsx';
import Product from './Product.jsx';
import BasketList from './BasketList.jsx'
import Fotter from './Fotter.jsx'
import Style from '../sass/style.scss'
import { HashRouter, Route, Switch, Link } from "react-router-dom";


document.addEventListener('DOMContentLoaded', function () {
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                flag:false,
                handguns: false,
                rifles: false,
                Shotguns:false,
                Ammunition:false,
                text: "",
                gundataBase: null,
                num1: 0,
                num2: 6,
                cardItem:[],
            }
        }
        /////Data base
        componentDidMount() {
            fetch(`http://localhost:3000/guns`)
                .then(resp => {
                    if (resp.ok) {
                        return resp.json();
                    }
                    throw new Error('BLad?!');
                })
                .then(data => {
                    this.setState({
                        gundataBase: data
                    }, () => {
                        console.log(this.state.gundataBase)
                    })
                })
                .catch(err => console.log(err));
        }
        ////Methods
        //LEFT SIDE
        setOnlnyHandguns = (bool) => {
            this.setState({
                flag:bool,
            },()=>{
                if(this.state.flag===true){
                    this.setState({
                        handguns:false,
                        rifles: true,
                        Shotguns:true,
                        Ammunition:true
                    })
                }else{
                    this.setState({
                        handguns:false,
                        rifles: false,
                        Shotguns:false,
                        Ammunition:false
                    })
                }
            })
         }
        setOnlnyRifles = (bool) => {
            this.setState({
                flag:bool,
            },()=>{
                if(this.state.flag===true){
                    this.setState({
                        handguns:true,
                        rifles: false,
                        Shotguns:true,
                        Ammunition:true
                    })
                }else{
                    this.setState({
                        handguns:false,
                        rifles: false,
                        Shotguns:false,
                        Ammunition:false
                    })
                }
            })
        }
        setOnlnyShotguns = (bool)=>{
            this.setState({
                flag:bool,
            },()=>{
                if(this.state.flag===true){
                    this.setState({
                        handguns:true,
                        rifles: true,
                        Shotguns:false,
                        Ammunition:true
                    })
                }else{
                    this.setState({
                        handguns:false,
                        rifles: false,
                        Shotguns:false,
                        Ammunition:false
                    })
                }
            })
        }
        setOnlnyAmmunition =(bool)=>{
            this.setState({
                flag:bool,
            },()=>{
                if(this.state.flag===true){
                    this.setState({
                        handguns:true,
                        rifles: true,
                        Shotguns:true,
                        Ammunition:false
                    })
                }else{
                    this.setState({
                        handguns:false,
                        rifles: false,
                        Shotguns:false,
                        Ammunition:false
                    })
                }
            })
    } 
        //TEXT FILTER
        setFilterText = (text) => {
            this.setState({
                text: text, num1: 0, num2: 6
            })
        }
        //BOX BREAKER
        nextBoxes = () => {
            this.setState({
                num1: this.state.num1 + 6,
                num2: this.state.num2 + 6,
            })
        }
        previusBoxes = () => {
            this.setState({
                num1: this.state.num1 - 6,
                num2: this.state.num2 - 6,
            })
        }
        addToCard=(text)=>{
            const tempArry =this.state.cardItem.slice();
            tempArry.push(text);
            this.setState({
                cardItem: tempArry,
            },()=>{
                console.log(this.state.cardItem)
            })
        }
        removeFromList=(text)=>{
            const tempArry = this.state.cardItem.slice();
            const temp2 = tempArry.filter((t)=>{
                return t!==text
            });
            this.setState({
                cardItem:temp2,
            })
        }
        render() {
            return (
                
                <HashRouter>
                    <div>
                        <Header />
                        <SearcherProduct
                            filterText={this.state.text}
                            setFilterTextProps={this.setFilterText}
                        />
                        <div className='section'>
                        <ChoseProductList 
                        flag={this.state.flag}
                        setOnlnyHandguns={this.setOnlnyHandguns}
                        handguns={this.state.handguns}
                        setOnlnyRifles={this.setOnlnyRifles}
                        rifles={this.state.rifles}
                        setOnlnyShotguns = {this.setOnlnyShotguns}//??
                        Shotguns={this.state.Shotguns}//!
                        setOnlnyAmmunition = {this.setOnlnyAmmunition}//??
                        Ammunition={this.state.Ammunition}//!
                        />
                        <Switch>
                        <Route path="/" exact render={props => <MiddleSection {...props}
                            database={this.state.gundataBase}
                            filterText={this.state.text}
                            handguns={this.state.handguns}
                            rifles={this.state.rifles}
                            num1={this.state.num1}
                            num2={this.state.num2}
                            previusBoxes ={this.previusBoxes}
                            nextBoxes={this.nextBoxes}
                            />}/>
                            <Route path="/products/:id" render={props => 
                            <Product addToCard={this.addToCard} 
                            {...props} />} />
                        </Switch>
                        <BasketList cardItem={this.state.cardItem}
                                    removeFromList={this.removeFromList}
                        />
                        </div>  
                        <Fotter/>   
                    </div>
                </HashRouter>
            )
        }

    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


