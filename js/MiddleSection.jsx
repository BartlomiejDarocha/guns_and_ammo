import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/MiddleSection.scss'
import {Link } from "react-router-dom";

class MiddleSection extends React.Component { //props database, handguns,filterText,rifles,num1,num2
    render() {
        let boxs = [];
        let libox = [];
        let add = false;
        for (const key in this.props.database) {
            add = false
            if (this.props.filterText !== "") {
                if (this.props.database[key].name.indexOf(this.props.filterText) >= 0) {
                    add = true;
                } else {
                    add = false;
                }
            }
            if (this.props.handguns === true && this.props.database[key].categoryId === 1 && this.props.filterText === "") {
                add = true
            }
            if (this.props.rifles === true && this.props.database[key].categoryId === 2 && this.props.filterText === "") {
                add = true
            }
            if (add === true) {
                boxs.push(<Link style={{textDecoration:'none'}} to={`/products/${this.props.database[key].id}`}>
                        <div className='showBox'>
                            <h3>{this.props.database[key].name}</h3>
                            <h4>{this.props.database[key].ammo}</h4>
                        </div>
                    </Link>
                )
            } 
        }
        for (let i = 0; i <boxs.length / 6; i++) {
            libox.push(<li style={{ color: (i * 6) === this.props.num1 ? "red" : "black" }}>*</li>)
        }
        let newBox = boxs.slice(this.props.num1, this.props.num2);
        return (
            <section className='middleSection'>
                <div className='boxlist'>
                    {newBox}
                </div>
                <span className="prevLI" onClick={this.props.previusBoxes} style={{ display: this.props.num1 === 0 ? "none" : "block" }}>LEFT</span>
                <ul className='boxBreaker'>
                    {libox}
                </ul>
                <span className="nextLI" onClick={this.props.nextBoxes} style={{ display: this.props.num2 >= boxs.length ? "none" : "block" }}>RIGHT</span>
            </section>
        )
    }
}
export default MiddleSection;