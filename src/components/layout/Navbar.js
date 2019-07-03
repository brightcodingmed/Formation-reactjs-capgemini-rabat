import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <div className="nav navbar-nav">
                        <a className="nav-item nav-link active" href="#">
                            <i className="fa fa-github-alt"></i>
                            Home <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="#">Home</a>
                    </div>
                </nav>
               
            </div>
        )
    }
}

export default Navbar;