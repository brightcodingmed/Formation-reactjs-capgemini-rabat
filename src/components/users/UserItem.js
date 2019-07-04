import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class UserItem extends Component {

    // state = {
    //     id: 1,
    //     login: "mojombo",
    //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo",
    // }

    static defaultProps = {
        user: {
            id: 0,
            login: '',
            avatar_url: '',
            html_url: '' 
        }
      
    }

    render() {
        return (
                <div className="card text-center mt-3">
                    <img style={{width: '100px'}} className="card-img-top rounded-circle" src={this.props.user.avatar_url} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{this.props.user.login}</h4>
                        <p className="card-text">
                            <Link to={`/users/${this.props.user.login}`} className="btn btn-danger">
                                Read More
                            </Link>
                        </p>
                    </div>
                </div>
           
        )
    }
}

export default UserItem;
