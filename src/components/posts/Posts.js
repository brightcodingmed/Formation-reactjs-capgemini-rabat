import React, { Component } from 'react'
import axios from 'axios';

class Posts extends Component {

    componentDidMount() {
        this.getPosts();
    }

    state = {
        posts: [], 
        title: '',
        body: ''
    }

    getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(res => this.setState({posts: res.data}))
             .catch(err => console.log(err))
    }

    initInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    persistPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {title: this.state.title, body: this.state.body})
            .then(res => {
                this.setState({
                    posts: [res.data, ...this.state.posts],
                    title: '',
                    body: ''
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        const { title, body } = this.state;

        return (
            <>
            
            <div className="row my-2">
                <div className="col-md-6 mx-auto">

                    <div className="form-group">
                      <label htmlFor="title">title</label>
                      {this.state.title}
                      <input onChange={this.initInput} value={title} type="text" name="title" id="title" className="form-control" />
                    </div>

                    <div className="form-group">
                      <label htmlFor="body">body</label>
                      {this.state.body}
                     <textarea value={body} onChange={this.initInput} className="form-control" name="body" id="body" rows="2">
                     </textarea>
                    </div>
                    
                    <button onClick={this.persistPost} className="btn btn-primary btn-block">
                        <i className="fa fa-send"></i> Post
                    </button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">

                 <h1 className="my-2">List of posts</h1>

                <table className="table table-striped">
                   <thead>
                       <tr>
                           <th>Id</th>
                           <th>Title</th>
                           <th>Body</th>
                           <th></th>
                       </tr>
                   </thead>
                   <tbody>
                       {this.state.posts.map(post => (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td className="text-right " nowrap="true">
                                    <button className="btn mr-1 btn-warning btn-sm">
                                        <i className="fa fa-pencil"></i>
                                    </button>

                                    <button className="btn btn-dark btn-sm">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr> 
                       ))}
                   </tbody>
               </table> 
                </div>
            </div>
               
            </>
        )
    }
}

export default Posts;