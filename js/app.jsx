import React from 'react';
import ReactDOM from 'react-dom';
import Style from '../sass/style.scss'

document.addEventListener('DOMContentLoaded', function () {
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
                            <li>TESKT</li>
                            <li>TESKT</li>
                            <li>TESKT</li>
                        </ul>
                    </div>
                    <div className="banner">
                        <div className='banner-content'>
                            <div className="banner1" style={{ display: this.state.banNum === 1 ? 'block' : 'none' }}>
                                BANNER1
                            </div>
                            <div className="banner2" style={{ display: this.state.banNum === 2 ? 'block' : 'none' }}>
                                BANNER2
                            </div>
                            <div className="banner3" style={{ display: this.state.banNum === 3 ? 'block' : 'none' }}>
                                BANNER3
                            </div>
                            <div className="banner4" style={{ display: this.state.banNum === 4 ? 'block' : 'none' }}>
                                BANNER4
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
    class Mainsection extends React.Component {

        render() {
            let boxs = [];
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
                    boxs.push(<div onClick={this.props.getInside} className='showBox'>
                        <h3>{this.props.database[key].name}</h3>
                        <button >kup</button>
                    </div>)
                }
            }
            let newBox = boxs.slice(this.props.num1, this.props.num2);
            let libox = [];
            for (let i = 0; i < boxs.length / 8; i++) {
                libox.push(<li style={{ color: (i * 8) === this.props.num1 ? "red" : "black" }}>*</li>)
            }
            return (
                <section>
                    <div className="sectionControlBar">
                        <SearchBar
                            filterText={this.props.filterText}
                            setFilterTextProps={this.props.setFilterTextProps}
                            handguns={this.props.handguns}
                            rifles={this.props.rifles}
                            setOnlnyHandguns={this.props.setOnlnyHandguns}
                            setOnlnyRifles={this.props.setOnlnyRifles}
                        />
                    </div>
                    <div className='mainSection'>
                        <div className='leftSide'></div>
                        <div className='middle'>
                            <div className='middle' style={{display:this.props.display===true? 'block':'none'}}>
                                {newBox}
                            </div>
                            <div>
                                <span className="prevLI" onClick={this.props.previusBoxes} style={{ display: this.props.num1 === 0 ? "none" : "block" }}>LEFT</span>
                                <ul className='boxBreaker'>
                                    {libox}
                                </ul>
                                <span className="nextLI" onClick={this.props.nextBoxes} style={{ display: this.props.num1 > newBox.length ? "none" : "block" }}>RIGHT</span>
                            </div>
                            
                        </div>
                        <div className='rightSide'>
                        <Basked/>
                        </div>
                    </div>
                </section>
            )
        }
    }
    class Basked extends React.Component {
        render() {
            //let items =this.props.basked;
           // items.push(<li>cos<input type="number"/><button onClick={this.props.removeItem}>remove</button></li>)    
            return (
                <div>
                    <ul>
                        <li>cos<input type="number"/><button onClick={this.props.removeItem}>remove</button></li>    
                    </ul>
                </div>
            )
        }
    }
    class SearchBar extends React.Component {
        handlerText = (e) => {
            this.props.setFilterTextProps(e.target.value)
        }
        handlerBox1 = () => {
            this.props.setOnlnyHandguns(!this.props.handguns)
        }
        handlerBox2 = () => {
            this.props.setOnlnyRifles(!this.props.rifles)
            console.log(this.props.rifles)
        }
        render() {
            return (
                <form >
                    <input onChange={this.handlerText} type="text" value={this.props.filterText} placeholder="Search..." />
                    <input onChange={this.handlerBox1} type="checkbox" value={this.props.handguns} checked={this.props.handguns ? true : false} /><label>handguns</label>
                    <input onChange={this.handlerBox2} type="checkbox" value={this.props.refiles} checked={this.props.rifles ? true : false} /><label>rifles</label>
                </form>
            )
        }
    }

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                handguns: true,
                rifles: true,
                text: "",
                gundataBase: null,
                display:true,
                num1: 0,
                num2: 8,
            }
        }
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
                text: text, num1: 0, num2: 8
            })
        }
        nextBoxes = () => {
            this.setState({
                num1: this.state.num1 + 8,
                num2: this.state.num2 + 8,
            })
        }
        previusBoxes = () => {
            this.setState({
                num1: this.state.num1 - 8,
                num2: this.state.num2 - 8,
            })
        }
        getInside =()=>{
            this.setState({
                display:false,
            },()=>{
                console.log(this.state.display , "DISPLAY TEST")
            })
        }
        render() {
            return (
                <div>
                    <Header />
                    <Mainsection
                        display={this.state.display}
                        getInside={this.getInside}
                        previusBoxes={this.previusBoxes}
                        nextBoxes={this.nextBoxes}
                        num1={this.state.num1}
                        num2={this.state.num2}
                        handguns={this.state.handguns}
                        rifles={this.state.rifles}
                        database={this.state.gundataBase}
                        filterText={this.state.text}
                        setFilterTextProps={this.setFilterText}
                        setOnlnyHandguns={this.setOnlnyHandguns}
                        setOnlnyRifles={this.setOnlnyRifles}

                    />

                </div>
            )
        }

    }
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


{/* <SearchBar
filterText={this.state.text}
setFilterTextProps={this.setFilterText}
handguns={this.state.handguns}
rifles={this.state.rifles}
setOnlnyHandguns={this.setOnlnyHandguns}
setOnlnyRifles={this.setOnlnyRifles}
/>
<GunMainList
filterText={this.state.text}
handguns={this.state.handguns}
rifles={this.state.rifles}
database={this.state.gundataBase}
/> */}




// class GunMainList extends React.Component {
//     render() {
//         let handGunsRows = [];
//         let rifleGunsRows = [];
//         let addHandguns = false;
//         let addRifles = false;

//         for (const key in this.props.database) {
//             if (this.props.database[key].categoryId === 1) {
//                 addHandguns = false
//                 if (this.props.filterText !== "") {
//                     if (this.props.database[key].name.indexOf(this.props.filterText) >= 0) {
//                         addHandguns = true;
//                     }
//                 } else {
//                     addHandguns = true;
//                 }
//                 if (this.props.handguns === false) {
//                     addHandguns = false
//                 }
//                 if (addHandguns === true) {
//                     handGunsRows.push(<li>{this.props.database[key].name}</li>);
//                 }
//             }
//         }
//         for (const key in this.props.database) {
//             if (this.props.database[key].categoryId === 2) {
//                 addRifles = true
//                 if (this.props.rifles === false) {
//                     addRifles = false
//                 }
//                 if (addRifles === true) {
//                     rifleGunsRows.push(<li>{this.props.database[key].name}</li>);
//                 }
//             }
//         }
//         return (
//             <div>
//                 <ul>{'HANDGUNS'} {<samp>{handGunsRows.length}</samp>}
//                     {handGunsRows}
//                 </ul>
//                 <ul>{'RIFLES'} {<samp>{rifleGunsRows.length}</samp>}
//                     {rifleGunsRows}
//                 </ul>
//             </div>
//         )
//     }
// }