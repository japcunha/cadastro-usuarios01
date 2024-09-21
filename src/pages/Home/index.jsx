import './style.css'
import Trash from '../../assets/trash-24.png'

function Home() {

  const users = [
    {
      id: '237fkd8sd',
      name: 'Joane',
      age: 25,
      email: 'joane@email.com',
    },
    {
      id: '237f098sd',
      name: 'joao',
      age: 22,
      email: 'joao@email.com',

    },
  ]

  return (
    <div className='container'>
      <form>
        <h1>Cadastro de usuários</h1>
        <input name='name' type="name" />
        <input name='age' type="age" />
        <input name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <p>Name: {user.name} </p>
            <p>Age: {user.age} </p>
            <p>Email: {user.email} </p>
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
