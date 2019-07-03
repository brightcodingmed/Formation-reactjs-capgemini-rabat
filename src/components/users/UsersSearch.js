import React, { Component } from 'react'



class UsersSearch extends Component {

    state = {
        search: ''
    }

    initSearch = (e) => {
       this.setState({search: e.target.value});
    }

    SendSearch = (e) => {
        e.preventDefault();
        this.props.childToParent(this.state.search);
    }

    render() {
        return (
             <div className="my-4">
                <form onSubmit={this.SendSearch}>
                    <div className="form-group ">
                      <input onChange={this.initSearch} value={this.state.search} type="text" name="search"  className="form-control" placeholder="Search..." />
                      {this.state.search}
                    </div>
 
                    <button type="submit" className="btn btn-primary btn-block">Search</button>
                </form>
             </div>
               
            
        )
    }
}

export default UsersSearch;
