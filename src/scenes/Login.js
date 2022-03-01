import { useState } from 'react'
import bcrypt from 'bcryptjs';

const salt = '$2b$10$Lt0PlnYcAuxa8s2QX1iw6.'

export default function Login ({ setToken, setIsUser }) {
    const [ email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        const hashedPassword = bcrypt.hashSync(password, salt)
        fetch('http://localhost:3000/users/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password: hashedPassword })
        })
        .then(res => res.json())
        .then(data => setToken(data.token))
        .catch(alert)
    }
    return (
        <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}> 
            <label> Email:
                <input type='email' value={email} onChange={e => setEmail(e.target.value)} />
            </label><br/>
            <label>Password:
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            </label><br/>
            <input type='submit' value='Login' />
        </form>
        <button onClick={() => setIsUser(false)}>Sign Up</button>
        </>
    )
}