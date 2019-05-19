import React, { Component } from 'react';
import api from '../../services/api';
import './index.css'

export default class main extends Component {
    state = {
        users : [],
        usersInfo : [],
        page : 1,
    }
    componentDidMount(){
        this.loadUsers()
    }

    loadUsers = async (page = 1) => {
        const response = await api.get(`/users?page=${page}`)

        const {docs, ...usersInfo} = response.data

        this.setState({users : docs, usersInfo, page})
    }

    prevPage = () => {
        const {page,usersInfo} = this.state

        if(page === 1) return

        const pageNumber = page - 1

        this.loadUsers(pageNumber)
    }

    nextPage = () => {
        const {page,usersInfo} = this.state

        if(page === usersInfo.pages) return

        const pageNumber = page + 1

        this.loadUsers(pageNumber)
    }

  render() {
      const {users, page , usersInfo} = this.state
    return(
        <div className='list-users'>
            {users.map( user => (
                <article key={user._id}>
                    <strong>{user.name}</strong>
                    <p>{user.email}</p>
                    <p>{user.password}</p>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={ this.prevPage} >Anterior</button>
                <button disabled = {page === usersInfo.pages} onClick={ this.nextPage} >Próximo</button>
            </div>
        </div>
    )
  }
}

