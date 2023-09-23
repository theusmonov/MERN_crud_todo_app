
import React, { useContext, useEffect, useState } from 'react'
import './App.css'; 
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from './App';
import { UserContext } from './contexts/UserContext';

export default function User() {
    const {users, setUsers} = useContext(UserContext)

    useEffect(() => {
        axios.get(`${baseUrl}/todos`) 
        .then((result) => {
           setUsers(result.data)
        })
        .catch((err) => console.error(err)); 
    }, []);

    const handleDelete = (id) => {
        axios.delete(`${baseUrl}/todos/del/`+id)
        .then((res) => console.log(res))
         window.location.reload()
        .catch((err) => console.log(err))
    }

    return (
        <div className='user-container'>
            
            <div className='user-title'>
             <Link to="/create" className="btn btn-success">Add + </Link>
                <div className='user-lists'>
                    <ul className='user-ul'>
                        <li className='user-li'>Name</li>
                        <li className='user-li'>Email</li>
                        <li className='user-li'>Age</li>
                        <li className='user-li'>Action</li>
                    </ul>
                </div>
                <div className='user-lists2'>
                    {
                        users?.data?.map((data) => (
                            <ul className='user-ul2'>
                                <li className='user-li1'>{data.name}</li>
                                <li className='user-li'>{data.email}</li>
                                <li className='user-li-age'>{data.age}</li>
                                <li className='user-li4'>
                                    <Link to={`/update/${data._id}`}><button className='user-edit-btn'>Update</button></Link>
                                    <button className='user-del-btn' onClick={(e) => handleDelete(data._id)}>Delete</button>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
