import React, { Component } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'


class Posts extends Component {

    componentDidMount() {
        this.getPosts();
    }

    state = {
        posts: [],
        showForm: false, 
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
                    body: '',
                    showForm: false
                })
            })
            .catch(err => console.log(err))
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    destroyPost(id) {
        
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this imaginary file!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No'
          }).then((result) => {
            if (result.value) {


                axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(() => {
                    this.setState({
                        posts: this.state.posts.filter(post => post.id !== id)
                    })
                }) 

              Swal.fire({
                title: 'Deleted',
                text: 'This post is deleted',
                type: 'success',
                timer: 5000
              })
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
            } 
          })
     
    }

    render() {

        const { title, body } = this.state;

        return (
            <>
            
            <div className="row">
                <div className="col-md-6">
                    <h1 className="my-2">List of posts</h1>
                </div>
                <div className="col-md-6 text-right">
                    <button onClick={this.toggleForm} className="mt-2 btn btn-primary btn-sm">
                        <i className="fa fa-plus"></i>
                    </button>
                </div>
            </div>

            {this.state.showForm ? 
              (<div className="row my-2">
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
          </div>)
            : 
            null
            }
            

            <div className="row">
                <div className="col-md-12">

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

                                    <button onClick={this.destroyPost.bind(this, post.id)} className="btn btn-dark btn-sm">
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