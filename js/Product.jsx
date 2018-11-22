import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/style.scss'

class Product extends React.Component {
    constructor(props){
        super(props);
        this.state={
            productInfo:null
        }
    }
    componentDidMount() {
        //console.log(this.props.match.params.id, '??')
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
                        productInfo:data[key],
                    })
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        if(this.state.productInfo===null){
            return null;
        }

        return (
            <div className="productBox">
                <h1>{this.state.productInfo.name}</h1>
                <h1>{this.state.productInfo.ammo}</h1>
            </div>
        )
    }
}
export default Product;