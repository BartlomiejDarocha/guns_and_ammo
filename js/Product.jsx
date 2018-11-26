import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/Product.scss'
import {Link} from 'react-router-dom'

class Product extends React.Component { //props addToCard
    constructor(props) {
        super(props);
        this.state = {
            productInfo: null,
        }
    }
    
    componentDidMount() {
        fetch(`http://localhost:3000/guns?id=${this.props.match.params.id}`)
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error('BLad?!');
            })
            .then(data => {
                for (const key in data) {
                    this.setState({
                        productInfo: data[key],
                    })
                }
            })
            .catch(err => console.log(err));
    }
    
    handeClick=()=>{
        this.props.addToCard(this.state.productInfo.name);
    }
    render() {
        if (this.state.productInfo === null) {
            return null;
        }
        
        return (
            <div className="productBox">
                <div>
                    <h1>{this.state.productInfo.name}</h1>
                    <img className="productBoxImg" src={`../img/${this.state.productInfo.img}`}></img>
                    <p>{this.state.productInfo.des}</p>
                    <h2>Ammunition: {this.state.productInfo.ammo}</h2>
                    <button onClick={this.handeClick}>Add to Cart</button>
                    <Link to="/"><button className="buttonBack">Back</button></Link>
                </div>
            </div>
        )
    }
}
export default Product;