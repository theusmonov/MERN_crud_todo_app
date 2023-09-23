// App.jsx
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import User from './User'
import CreateUser from './CreateUser'
import DeleteUser from './DeleteUser'
import UpdateUser from './UpdateUser'

export const baseUrl = "http://localhost:5500"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/delete/:id" element={<DeleteUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
