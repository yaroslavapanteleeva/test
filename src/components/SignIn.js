import React, {useState} from 'react';

export const SignIn = () => {
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [hasAccount, setHasAccount] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
       
    }

    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <small className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button type="submit" className="btn btn-primary">Вход</button>
        </form>
    )
}