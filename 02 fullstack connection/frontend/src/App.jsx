import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([]) ;

  useEffect(()=>{
    axios.get('http://localhost:3000/api/users')
    .then((response)=>{
     setUsers(response.data)
    })
    .catch((error)=>{
      console.log(`cannot get data ${error}`) ;
    })
  })

  return (
    <>
  <div className="p-6 max-w-2xl mx-auto">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">
      Frontend and Backend Connection
    </h2>
    <h3 className="text-lg text-gray-600 mb-6">
      Total Users: <span className="font-semibold">{users.length}</span>
    </h3>

    <div className="grid gap-4">
      {users.map((user) => (
        <div
          key={user.id}
          className="p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500">{user.city}</p>
          <p className="text-gray-500">Age: {user.age}</p>
        </div>
      ))}
    </div>
  </div>
</>

  )
}

export default App
