import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/BasketList.scss'

class BasketList extends React. Component{
    
    removeFromList =(e)=>{
        this.props.removeFromList(e.target.dataset.name)
    }

    render(){
        let list =[];
        list = this.props.cardItem.map((el)=>{
            return(<li>{el}<button data-name={el} onClick={this.removeFromList}>X</button></li>)
        })
        
        return(
            <div className="leftside">
                <div>
                    <h2>Your Cart</h2>
                </div>
                <div>
                    <ul>
                        {list}
                    </ul>

                </div>
            </div>
        )
    }
}
export default BasketList;