import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/Header.scss'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            banNum: 1,
        }
    }
    componentDidMount() {
        this.intervalID = setInterval(() => {
            if (this.state.banNum === 4) {
                this.setState({
                    banNum: 1,
                })
            } else {
                this.setState({
                    banNum: this.state.banNum + 1,
                })
            }

        }, 5000)
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    handleClick1 = () => {
        this.setState({
            banNum: 1
        })
    }
    handleClick2 = () => {
        this.setState({
            banNum: 2
        })
    }
    handleClick3 = () => {
        this.setState({
            banNum: 3
        })
    }
    handleClick4 = () => {
        this.setState({
            banNum: 4
        })
    }
    render() {
        return (
            <header>
                <div className='header-navi'>
                    <ul>
                        <li>Inny teskt</li>
                        <li>TESKT</li>
                        <li>TESKT</li>
                    </ul>
                </div>
                <div className="banner">
                    <div className='banner-content'>
                        <div className="banner1" style={{ display: this.state.banNum === 1 ? 'block' : 'none' }}>
                        </div>
                        <div className="banner2" style={{ display: this.state.banNum === 2 ? 'block' : 'none' }}>
                        </div>
                        <div className="banner3" style={{ display: this.state.banNum === 3 ? 'block' : 'none' }}>
                        </div>
                        <div className="banner4" style={{ display: this.state.banNum === 4 ? 'block' : 'none' }}>
                        </div>
                    </div>
                    <ul className="banner-controls">
                        <li onClick={this.handleClick1}>1</li>
                        <li onClick={this.handleClick2}>2</li>
                        <li onClick={this.handleClick3}>3</li>
                        <li onClick={this.handleClick4}>4</li>
                    </ul>
                </div>
            </header>
        )
    }
}
export default Header;