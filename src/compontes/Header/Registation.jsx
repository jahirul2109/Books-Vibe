import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { NavLink } from 'react-router';
import auth from '../../firebase/firebase.auth';

const Registation = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false)
    const handelEmailPassLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        const Name = e.target.userName.value;
        const url = e.target.photo.value;
        setError('')
        setSuccess(false)
        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                result.user.displayName = Name ;
                result.user.photoURL = url ;
                console.log(result)
                setSuccess(true)
                e.target.reset()
            })
            .catch(error => setError(error.message))
    }
    return (
        <div className='flex-1 min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handelEmailPassLogin} >
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className="input" name='userName' placeholder="Jone doe" />
                            <label className="label">Photo</label>
                            <input type="text" className="input" name='photo' placeholder="Photo URL" />
                            <label className="label">Email</label>
                            <input type="email" className="input" name='email' placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" className="input" name='pass' placeholder="Password" />
                            <button className="btn btn-neutral mt-4">Regesition</button>
                            <p>Already Have a Account ?? <NavLink className='text-blue-600 underline' to="/login">Login</NavLink></p>
                            <p className='text-red-500'>{error} </p>
                            <p className='text-green-500'> {success && <span>Account Create Successfully</span>} </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registation