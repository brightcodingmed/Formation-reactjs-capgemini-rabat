import React, { Component } from 'react'
import axios from 'axios';
import UserItem from './UserItem';
import UsersSearch from './UsersSearch';
import Loading from './../layout/Loading';

export default class Users extends Component {

    state = {
        users: [],
        loading: true
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers = async () => {


         try {
             let res = await axios.get("https://api.github.com/users");

             this.setState({
                users: res.data,
                loading: false
             })
         } catch (error) {
             this.setState({
                 loading: false
             })
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

        this.setState({loading: true})

        axios.get(`https://api.github.com/search/users?q=${mySearch}`)
             .then(res => {
                 
                 this.setState({
                    users: res.data.items,
                    loading: false
                 })
             })
             .catch(err => this.setState({loading: false}))
    }

    render() {
        return (
        
            <div>
                <div className="row">
                    <div className="col-md-12">
                         <UsersSearch childToParent={this.getResultSearch}/> 
                         {this.state.loading ? <Loading /> : ''} 
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
