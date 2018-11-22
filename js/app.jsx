import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import SearcherProduct from './SearcherProduct.jsx';
import ChoseProductList from './ChoseProductList.jsx';
import MiddleSection from './MiddleSection.jsx';
import Product from './Product.jsx';
import Style from '../sass/style.scss'
import { HashRouter, Route, Switch, Link } from "react-router-dom";


document.addEventListener('DOMContentLoaded', function () {
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                handguns: true,
                rifles: true,
                text: "",
                gundataBase: null,
                num1: 0,
                num2: 6,
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
        setOnlnyHandguns = (bool) => {
            this.setState({
                handguns: bool,
            })
        }
        setOnlnyRifles = (bool) => {
            this.setState({
                rifles: bool,
            })
        }
        setFilterText = (text) => {
            this.setState({
                text: text, num1: 0, num2: 6
            })
        }
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
        getInside = () => {
            this.setState({
                display: false,
            }, () => {
                console.log(this.state.display, "DISPLAY TEST")
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
                        setOnlnyHandguns={this.setOnlnyHandguns}
                        handguns={this.state.handguns}
                        setOnlnyRifles={this.setOnlnyRifles}
                        rifles={this.state.rifles}
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
                            <Route path="/products/:id" render={props => <Product {...props} />} />
                        </Switch>
                        
                        </div>     
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


