import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-primary">
                    <div className="nav navbar-nav">
                        <Link className="nav-item nav-link active" to="/">
                            <i className="fa fa-github-alt mr-3"></i>
                            Home <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="/about">About</Link>
                        <Link className="nav-item nav-link" to="/contact">Contact</Link>
                        <Link className="nav-item nav-link" to="/posts">Blog</Link>
                    </div>
                </nav>
               
            </div>
        )
    }
}

export default Navbar;