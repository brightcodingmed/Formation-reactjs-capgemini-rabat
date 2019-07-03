import React, { Component } from 'react'
import axios from 'axios';
import UserItem from './UserItem';
import UsersSearch from './UsersSearch';

export default class Users extends Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {


         try {
             let res = await axios.get("https://api.github.com/users");
             this.setState({
                users: res.data 
             })
         } catch (error) {
           console.log(error)   
         }


        // axios.get('https://api.github.com/users')
        //      .then(res => {
        //          this.setState({
        //             users: res.data 
        //          })
        //      })
        //      .catch(err => console.log(err))
    }

    getResultSearch = (mySearch) => {
        axios.get(`https://api.github.com/search/users?q=${mySearch}`)
             .then(res => {
                 console.log(res.data.items)
                 this.setState({
                    users: res.data.items 
                 })
             })
             .catch(err => console.log(err))
    }

    render() {
        return (
        
            <div>
                    <div className="row">
                    <div className="col-md-12">
                    <UsersSearch childToParent={this.getResultSearch}/> 
                    </div>
                </div>

                <div className="row"> 

                        { this.state.users.map(user => (
                            <div key={user.id} className="col-md-4">
                                <UserItem user={user} />
                            </div>
                        )) 
                        }
                    
                </div>  
            </div> 
            
        
        )
    }
}
