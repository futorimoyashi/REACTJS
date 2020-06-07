import React, { useState} from 'react'

export default function LoginForm(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function submit() {
        console.log(username + ' ' + password)
    }

    return (
        <form onSubmit={submit}>
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
            <input type="submit" />
        </form>
    )
}