//Destructuring;
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from "./components/DirectoryComponent";
import './App.css';

// import Component1 from "./components/Component1";
class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                <Directory />
            </div>
        );
    }
}

export default App;