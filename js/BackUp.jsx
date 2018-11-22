// import React from 'react';
// import ReactDOM from 'react-dom';
// import Header from './Header.jsx'
// import SearchBar from './SearchBar.jsx'
// import Style from '../sass/style.scss'
// import {HashRouter,Route,Switch,Link} from "react-router-dom";

// document.addEventListener('DOMContentLoaded', function () {
    
//     class Mainsection extends React.Component {
//         render() {
//             let boxs = [];
//             let add = false;
//             for (const key in this.props.database) {
//                 add = false
//                 if (this.props.filterText !== "") {
//                     if (this.props.database[key].name.indexOf(this.props.filterText) >= 0) {
//                         add = true;
//                     } else {
//                         add = false;
//                     }
//                 }
//                 if (this.props.handguns === true && this.props.database[key].categoryId === 1 && this.props.filterText === "") {
//                     add = true
//                 }
//                 if (this.props.rifles === true && this.props.database[key].categoryId === 2 && this.props.filterText === "") {
//                     add = true
//                 }
//                 if (add === true) {
//                     boxs.push(
//                         <Link to={`/products/${this.props.database[key].id}`}> <div onClick={this.props.getInside} className='showBox'>
//                         <h3>{this.props.database[key].name}</h3>
//                         <h4>{this.props.database[key].ammo}</h4>
//                     </div></Link>
//                    )
//                 }
//             }
//             let newBox = boxs.slice(this.props.num1, this.props.num2);
//             let libox = [];
//             for (let i = 0; i < boxs.length / 8; i++) {
//                 libox.push(<li style={{ color: (i * 8) === this.props.num1 ? "red" : "black" }}>*</li>)
//             }
//             return (
//                 <section>
//                     <div className="sectionControlBar">
//                         <SearchBar
//                             filterText={this.props.filterText}
//                             setFilterTextProps={this.props.setFilterTextProps}
//                             handguns={this.props.handguns}
//                             rifles={this.props.rifles}
//                             setOnlnyHandguns={this.props.setOnlnyHandguns}
//                             setOnlnyRifles={this.props.setOnlnyRifles}
//                         />
//                     </div>
//                     <div className='mainSection'>
//                         <div className='leftSide'></div>
//                         <div className='middle'>
//                                 {newBox}
//                             <div>
//                                 <span className="prevLI" onClick={this.props.previusBoxes} style={{ display: this.props.num1 === 0 ? "none" : "block" }}>LEFT</span>
//                                 <ul className='boxBreaker'>
//                                     {libox}
//                                 </ul>
//                                 <span className="nextLI" onClick={this.props.nextBoxes} style={{ display: this.props.num1 > newBox.length ? "none" : "block" }}>RIGHT</span>
//                             </div>
//                         </div>
//                         <div className='rightSide'>
//                         </div>
//                     </div>
//                 </section>
//             )
//         }
//     }
//     class Searcher extends React.Component{
        
//     }
//     class Product extends React.Component{
//         render(){
//             console.log(this.props.match.params.id, '??')
//             return(
//                 <div className="productBox">
//                     Test
//                 </div>
//             )
//         }
//     }
//     class App extends React.Component {
//         constructor(props) {
//             super(props);
//             this.state = {
//                 handguns: true,
//                 rifles: true,
//                 text: "",
//                 gundataBase: null,
//                 display:true,
//                 num1: 0,
//                 num2: 8,
//             }
//         }
//         componentDidMount() {
//             fetch(`http://localhost:3000/guns`)
//                 .then(resp => {
//                     if (resp.ok) {
//                         return resp.json();
//                     }
//                     throw new Error('BLad?!');
//                 })
//                 .then(data => {
//                     this.setState({
//                         gundataBase: data
//                     }, () => {
//                         console.log(this.state.gundataBase)
//                     })
//                 })
//                 .catch(err => console.log(err));
//         }
//         setOnlnyHandguns = (bool) => {
//             this.setState({
//                 handguns: bool,
//             })
//         }
//         setOnlnyRifles = (bool) => {
//             this.setState({
//                 rifles: bool,
//             })
//         }
//         setFilterText = (text) => {
//             this.setState({
//                 text: text, num1: 0, num2: 8
//             })
//         }
//         nextBoxes = () => {
//             this.setState({
//                 num1: this.state.num1 + 8,
//                 num2: this.state.num2 + 8,
//             })
//         }
//         previusBoxes = () => {
//             this.setState({
//                 num1: this.state.num1 - 8,
//                 num2: this.state.num2 - 8,
//             })
//         }
//         getInside =()=>{
//             this.setState({
//                 display:false,
//             },()=>{
//                 console.log(this.state.display , "DISPLAY TEST")
//             })
//         }
//         render() {
//             return (
//                 <HashRouter>
//                 <div>
//                     <Header />
//                     <Switch>
//                         <Route path="/" exact render={props=><Mainsection
//                         {...props}
//                         getInside={this.getInside}
//                         previusBoxes={this.previusBoxes}
//                         nextBoxes={this.nextBoxes}
//                         num1={this.state.num1}
//                         num2={this.state.num2}
//                         handguns={this.state.handguns}
//                         rifles={this.state.rifles}
//                         database={this.state.gundataBase}
//                         filterText={this.state.text}
//                         setFilterTextProps={this.setFilterText}
//                         setOnlnyHandguns={this.setOnlnyHandguns}
//                         setOnlnyRifles={this.setOnlnyRifles}
//                     />}/>
//                     <Route path="/products/:id" render={props=><Product {...props}/>}/>
//                     </Switch>

//                 </div>
//                 </HashRouter>
//             )
//         }

//     }
//     ReactDOM.render(
//         <App />,
//         document.getElementById('app')
//     );
// });


// {/* <SearchBar
// filterText={this.state.text}
// setFilterTextProps={this.setFilterText}
// handguns={this.state.handguns}
// rifles={this.state.rifles}
// setOnlnyHandguns={this.setOnlnyHandguns}
// setOnlnyRifles={this.setOnlnyRifles}
// />
// <GunMainList
// filterText={this.state.text}
// handguns={this.state.handguns}
// rifles={this.state.rifles}
// database={this.state.gundataBase}
// /> */}




// // class GunMainList extends React.Component {
// //     render() {
// //         let handGunsRows = [];
// //         let rifleGunsRows = [];
// //         let addHandguns = false;
// //         let addRifles = false;

// //         for (const key in this.props.database) {
// //             if (this.props.database[key].categoryId === 1) {
// //                 addHandguns = false
// //                 if (this.props.filterText !== "") {
// //                     if (this.props.database[key].name.indexOf(this.props.filterText) >= 0) {
// //                         addHandguns = true;
// //                     }
// //                 } else {
// //                     addHandguns = true;
// //                 }
// //                 if (this.props.handguns === false) {
// //                     addHandguns = false
// //                 }
// //                 if (addHandguns === true) {
// //                     handGunsRows.push(<li>{this.props.database[key].name}</li>);
// //                 }
// //             }
// //         }
// //         for (const key in this.props.database) {
// //             if (this.props.database[key].categoryId === 2) {
// //                 addRifles = true
// //                 if (this.props.rifles === false) {
// //                     addRifles = false
// //                 }
// //                 if (addRifles === true) {
// //                     rifleGunsRows.push(<li>{this.props.database[key].name}</li>);
// //                 }
// //             }
// //         }
// //         return (
// //             <div>
// //                 <ul>{'HANDGUNS'} {<samp>{handGunsRows.length}</samp>}
// //                     {handGunsRows}
// //                 </ul>
// //                 <ul>{'RIFLES'} {<samp>{rifleGunsRows.length}</samp>}
// //                     {rifleGunsRows}
// //                 </ul>
// //             </div>
// //         )
// //     }
// // }