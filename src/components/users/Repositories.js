import React, { Component } from 'react'

class Repositories extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.repos.map(repo => (
                        <li key={repo.id}>{repo.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Repositories;