import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from './App'
import { UserContext } from './contexts/UserContext'



export default function () {
    const {id} = useParams()
    const {users, setUsers} = useContext(UserContext)
    const [updateUser, setUpdateUser] = useState({})
   
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(`${baseUrl}/todos/`+id) 
        .then((result) => {
    
           setUpdateUser(result?.data)
           setEmail(result.data?.data?.email)
           setName(result.data?.data?.name)
           setAge(result.data?.data?.age)
        })
        .catch((err) => console.error(err));
    }, []);

    const Update = (e) => {
        e.preventDefault();
        axios.put(`${baseUrl}/todos/put/` + id, { name, age, email })
            .then((result) => {
                navigate('/');
                console.log(result);
            })
            .catch((err) => console.error(err));
    };
    
      

  return (
   
    <div className='create'>
       <div className='create-table'>
        <form onSubmit={Update}>
            <h2>Add User</h2>
            <div className='mb1'>
                <label htmlFor="">Name</label>
                <input type="text"  placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} className='form-control'/>
            </div>
            <div className='mb1'>
                <label htmlFor="">Email</label>
                <input type="email"  placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control'/>
            </div>
            <div className='mb1'>
                <label htmlFor="">Age</label>
                <input type="text"  placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)} className='form-control'/>
            </div>
            <button className='btn-sub'>Submit</button>
        </form>
       </div>
    </div>
  )
}
