import React, { useState } from 'react'
import toast from 'react-hot-toast'

export default function Signup() {
    const [userInfo, setUserInfo] = useState({})

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
        }
    }

    const handleCreateUser = () => {
        if (!userInfo.email) {
            toast('Please provide email')
        } else if (!userInfo.password || !userInfo.confirmPassword) {
            toast('Please provide a valid password')
        } else if (userInfo.password !== userInfo.confirmPassword) {
            toast('Password and confirm password should be same')
        } else {
            localStorage.setItem('userInfo', JSON.stringify(userInfo))
        }
    }

    return (
        <div>
            <label htmlFor='fName'>First Name</label>
            <input type='text' name='fName' placeholder='Please enter first name' onChange={(e) => handleChange(e)} />
            <br />
            <label htmlFor='lName'>Last Name</label>
            <input type='text' name='lName' placeholder='Please enter last name' onChange={(e) => handleChange(e)} />
            <br />
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Please enter email' onChange={(e) => handleChange(e)} />
            <br />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' placeholder='Please enter password' onChange={(e) => handleChange(e)} />
            <br />
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input type='password' name='confirmPassword' placeholder='Please enter confirm password' onChange={(e) => handleChange(e)} />
            <br />
            <input type="radio" id="html" name="fav_language" value="HTML" onChange={(e) => handleChange(e)} />
            <label htmlFor="html">HTML</label><br />
            <input type="radio" id="css" name="fav_language" value="CSS" onChange={(e) => handleChange(e)} />
            <label htmlFor="css">CSS</label><br />
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" onChange={(e) => handleChange(e)} />
            <label htmlFor="javascript">JavaScript</label>
            <br />
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={(e) => handleChange(e)} />
            <label htmlFor="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onChange={(e) => handleChange(e)} />
            <label htmlFor="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onChange={(e) => handleChange(e)} />
            <label htmlFor="vehicle3"> I have a boat</label><br />
            <button onClick={() => handleCreateUser()}>Create user</button>
        </div>
    )
}
