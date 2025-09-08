import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router'

function Login() {
    const navigate = useNavigate()
    const [userInfo, setUserInfo] = useState({})
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserInfo({ ...userInfo, [name]: value })
        setErrors({ ...errors, [name]: '' })
    }

    const validate = () => {
        let formValid = true
        let error = {}
        if (!userInfo.email || userInfo.email.trim() === '') {
            formValid = false
            error.email = 'please provide valid email'
        }

        if (!userInfo.password || userInfo.password.trim() === '') {
            formValid = false
            error.password = 'plaese provide valid password'
        }
        setErrors(error)

        return formValid
    }

    const handleLogin = () => {
        if (validate()) {
            const storedUsers = JSON.parse(localStorage.getItem('users'))
            if (storedUsers.find(el => (el.email === userInfo.email) && (el.password === userInfo.password))) {
                navigate('/')
            } else {
                toast.error('Invalid credentials')
            }
        }
    }

    return (
        <div>
            <label htmlFor='email'>Email<span style={{ fontSize: '10px', color: 'red' }}>{errors.email}</span></label>
            <input type='email' name='email' onChange={handleChange} /> <br />
            <label htmlFor='password' >Password<span style={{ fontSize: '10px', color: 'red' }}>{errors.password}</span></label>
            <input type='password' name='password' onChange={handleChange} /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
