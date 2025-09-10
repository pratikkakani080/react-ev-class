import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate, useSearchParams } from 'react-router'

export default function Signup() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')

    const [userInfo, setUserInfo] = useState({})
    const [errors, setErrors] = useState({})

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('users'))
        if (id) {
            setUserInfo(data.find((el, i) => i === Number(id)))
        }
    }, [id])

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target
        if (type === 'checkbox') {
            let vehicles = userInfo.vehicleInfo?.length > 0 ? [...userInfo.vehicleInfo] : []
            if (checked) {
                vehicles.push(value)
                setUserInfo({
                    ...userInfo,
                    vehicleInfo: vehicles
                })
            } else {
                setUserInfo({
                    ...userInfo,
                    vehicleInfo: vehicles.filter(el => el !== value)
                })
            }
        } else {
            setUserInfo({
                ...userInfo,
                [name]: value
            })
            setErrors({
                ...errors,
                [name]: ''
            })
        }
    }

    const validateForm = () => {
        let formIsValid = true
        let errs = {}
        if (!userInfo.fName || userInfo.fName.trim() === '') {
            formIsValid = false
            errs.fName = '* Please provide firstName'
        }
        if (!userInfo.lName || userInfo.lName.trim() === '') {
            formIsValid = false
            errs.lName = '* Please provide lastName'
        }
        if (!userInfo.email) {
            formIsValid = false
            errs.email = '* Please provide email'
        }
        if (!userInfo.password || userInfo.password.trim() === '') {
            formIsValid = false
            errs.password = '* Please provide a valid password'
        }
        if (!userInfo.confirmPassword || userInfo.confirmPassword.trim() === '') {
            formIsValid = false
            errs.confirmPassword = '* Please confirm password'
        }
        if ((userInfo.password && userInfo.confirmPassword) && (userInfo.password !== userInfo.confirmPassword)) {
            formIsValid = false
            errs.confirmPassword = '* Password and confirm password are not matching'
        }
        setErrors(errs)

        return formIsValid
    }

    const clearForm = () => {
        setUserInfo({
            fName: '',
            lName: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }

    const handleCreateUser = () => {
        if (validateForm()) {
            const storedUsers = JSON.parse(localStorage.getItem('users')) || []
            if (id) {
                const updatedData = storedUsers.map((el, i) => i === Number(id) ? userInfo : el)
                localStorage.setItem('users', JSON.stringify(updatedData))
            } else {
                localStorage.setItem('users', JSON.stringify([...storedUsers, userInfo]))
            }
            clearForm()
            navigate('/users')
        }
    }

    return (
        <div>
            <Link to={'/users'}>to Users</Link>

            <label htmlFor='fName'>First Name <span style={{ color: 'red', fontSize: '10px' }}>{errors.fName}</span></label>
            <input type='text' name='fName' placeholder='Please enter first name' value={userInfo.fName} onChange={(e) => handleChange(e)} />
            <br />
            <label htmlFor='lName'>Last Name <span style={{ color: 'red', fontSize: '10px' }}>{errors.lName}</span></label>
            <input type='text' name='lName' placeholder='Please enter last name' value={userInfo.lName} onChange={(e) => handleChange(e)} />
            <br />
            <label htmlFor='email'>Email <span style={{ color: 'red', fontSize: '10px' }}>{errors.email}</span></label>
            <input type='email' name='email' placeholder='Please enter email' value={userInfo.email} onChange={(e) => handleChange(e)} />
            <br />
            <label htmlFor='password'>Password <span style={{ color: 'red', fontSize: '10px' }}>{errors.password}</span></label>
            <input type='password' name='password' placeholder='Please enter password' value={userInfo.password} onChange={(e) => handleChange(e)} />
            <br />
            <label htmlFor='confirmPassword'>Confirm Password <span style={{ color: 'red', fontSize: '10px' }}>{errors.confirmPassword}</span></label>
            <input type='password' name='confirmPassword' placeholder='Please enter confirm password' value={userInfo.confirmPassword} onChange={(e) => handleChange(e)} />
            <br />
            <input type="radio" id="html" name="fav_language" value="HTML" checked={userInfo.fav_language === 'HTML'} onChange={(e) => handleChange(e)} />
            <label htmlFor="html">HTML</label><br />
            <input type="radio" id="css" name="fav_language" value="CSS" checked={userInfo.fav_language === 'CSS'} onChange={(e) => handleChange(e)} />
            <label htmlFor="css">CSS</label><br />
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" checked={userInfo.fav_language === 'JavaScript'} onChange={(e) => handleChange(e)} />
            <label htmlFor="javascript">JavaScript</label>
            <br />
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked={userInfo?.vehicleInfo?.includes('Bike')} onChange={(e) => handleChange(e)} />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" checked={userInfo?.vehicleInfo?.includes('Car')} onChange={(e) => handleChange(e)} />
            <label htmlFor="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" checked={userInfo?.vehicleInfo?.includes('Boat')} onChange={(e) => handleChange(e)} />
            <label htmlFor="vehicle3"> I have a boat</label><br />
            <button onClick={() => handleCreateUser()}>{id ? 'Update' : 'Create'} user</button>
        </div>
    )
}
