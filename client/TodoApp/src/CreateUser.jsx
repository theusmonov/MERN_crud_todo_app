import React, { useState } from 'react'
import axios from "axios"
import { baseUrl } from './App'
import { useNavigate } from 'react-router-dom'

export default function CreateUser() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/todos/new`, {name, email, age})
        .then(res => console.log(res))
        navigate("/")
        window.location.reload()
        .catch(err => console.log(err))
    }


  return (
    <div className='create'>
       <div className='create-table'>
        <form onSubmit={Submit}>
            <h2>Add User</h2>
            <div className='mb1'>
                <label htmlFor="">Name</label>
                <input type="text"  placeholder='Enter Name' className='form-control'
                onChange={(e) => setName (e.target.value)}/>
            </div>
            <div className='mb1'>
                <label htmlFor="">Email</label>
                <input type="email"  placeholder='Enter Email' className='form-control'
                 onChange={(e) => setEmail (e.target.value)}/>
            </div>
            <div className='mb1'>
                <label htmlFor="">Age</label>
                <input type="text"  placeholder='Enter Age' className='form-control'
                 onChange={(e) => setAge (e.target.value)}/>
            </div>
            <button className='btn-sub'>Submit</button>
        </form>
       </div>
    </div>
  )
}
