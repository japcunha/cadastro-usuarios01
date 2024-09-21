import { useEffect } from 'react'
import './style.css'
import Trash from '../../assets/trash-24.png'
import api from '../../services/api'

function Home() {

  let users = []

  async function getUsers() {
    users = await api.get('/usuarios')
  }

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuários</h1>
        <input placeholder="nome" name='name' type="name" />
        <input placeholder="idade" name='age' type="age" />
        <input placeholder="email" name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className='card' >
          <div>
            <p>Name: <span>{user.name}</span> </p>
            <p>Age: <span>{user.age}</span> </p>
            <p>Email: <span>{user.email}</span> </p>
          </div>

          <button>
            <img src={Trash} alt="trash" />
          </button>
        </div>
      ))}

    </div>
  )
}

export default Home
