import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email,setEmail] = useState('');


    const handleGetEmail = (e) =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }
    const makeAdmin = (e) =>{
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    alert('Successfully Added Admin')
                    setEmail('');
                }
            })

        e.preventDefault()
    }
    return (
        <div className="text-center">
        <h2 className="mb-3 fw-bold">Make A Admin</h2>
             <form className='admin-main' onSubmit={makeAdmin}>
                 <input onBlur={handleGetEmail} type="email" placeholder="Email"/>
                 <input type="submit" value="Make Admin" />
             </form>
        </div>
    );
};

export default MakeAdmin;