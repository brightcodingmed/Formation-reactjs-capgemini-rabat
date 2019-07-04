import React, { Component } from 'react';
import Repositories from './Repositories';
import axios from 'axios';

class Profile extends Component {

    state = {
        user: {},
        repos: []
    }

    componentDidMount() {
        let login = this.props.match.params.login;
        this.getOneUser(login);
    }

    getOneUser = (login) => {
       axios.get(`https://api.github.com/users/${login}`)
            .then((res) => {
                this.setState({
                    user: res.data
                })
                return this.getRepos(res.data.repos_url);
            })
            .then(repos => {
                this.setState({repos: repos.data});
            })
            .catch(err => console.log(err))
    }

    getRepos = (reposUrl) => {
        return axios.get(reposUrl);
    }

    render() {
        return (
            <div>
                <h1 className="mt-3">Profile user</h1>

                <ul className="list-group">
                    <li className="list-group-item active">{this.state.user.name}</li>
                    <li className="list-group-item"> 
                        <div className="badge badge-primary">Followers: {this.state.user.followers}</div> 
                    </li>
                    <li className="list-group-item">
                    <div className="badge badge-danger">Following: {this.state.user.following}</div>
                    </li>
                  
                </ul>

                <br/>

                <Repositories repos={this.state.repos} />
            </div>
        )
    }
}

export default Profile;
