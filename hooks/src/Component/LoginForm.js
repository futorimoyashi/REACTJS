import React, { useState, useContext} from 'react'
import { AuthContext } from '../Context/AuthContext'

export default function LoginForm(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { isLogin, check } = useContext(AuthContext)

    return (
        <div>
            <p>{isLogin}</p>
            <form>
                <input 
                type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <button onClick={() => check(username, password)}>Login</button>
        </div>
    )
}