import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import React, { useState } from 'react'
import auth from '../../firebase/firebase.auth';

const Login = () => {
    const [user, setUser] = useState(null)
    const handelGoogleLogin = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) =>
                setUser(result)
            )
            .catch((error) => {
                console.log(error)
            })
    }
    const handelGithubLogin = () => {
        const provider = new GithubAuthProvider();
        signInWithPopup(auth, provider)
            .then(result => setUser(result))
            .catch(error => console.log(error))
    }
    const handelEmailPassLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const pass = e.target.pass.value;
        createUserWithEmailAndPassword(auth , email , pass)
        .then(result => setUser(result))
        .catch(error => console.log(error))
        console.log(email)
    }   
    console.log(user)
    return (
        <div className='flex-1 min-h-screen'>
            <div>
                <button className='btn' onClick={handelGoogleLogin}>Singup Google</button>
                <button className='btn' onClick={handelGithubLogin}>Singup Github</button>
                <div>
                    <h1>
                        {user?.user.displayName}
                    </h1>
                    <p>{user?.user.email}</p>
                </div>
            </div>
            <div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handelEmailPassLogin} >
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" className="input" name='email' placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input" name='pass' placeholder="Password" />
                                <button className="btn btn-neutral mt-4">Regesition</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login