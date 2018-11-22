import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/style.scss'

class BoxBreaker extends React.Component { ///props: previusBoxes,nextBoxes,num1,boxs
    constructor(props){
        super(props);
        this.quantityOnSide=8;
    }
    render() {
        let libox = [];
        for (let i = 0; i < this.props.boxs.length / 8; i++) {
            libox.push(<li style={{ color: (i * quantityOnSide) === this.props.num1 ? "red" : "black" }}>*</li>)
        }
        return (
            <div>
                <span className="prevLI" onClick={this.props.previusBoxes} style={{ display: this.props.num1 === 0 ? "none" : "block" }}>LEFT</span>
                <ul className='boxBreaker'>
                    {libox}
                </ul>
                <span className="nextLI" onClick={this.props.nextBoxes} style={{ display: this.props.num1 > quantityOnSide ? "none" : "block" }}>RIGHT</span>
            </div>
        )
    }
}
export default BoxBreaker