import React, { useState } from 'react'

export default function Signup() {
    const [fName, setFName] = useState('')
    const [userInfo, setUserInfo] = useState({})
    console.log(userInfo);

    const handleChange = (event) => {
        console.log(event);

        const { name, value, type, checked } = event.target
        if (type === 'checkbox') {
            setUserInfo({
                ...userInfo,
                [value.toLowerCase()]: checked
            })
        } else {
            setUserInfo({
                ...userInfo,
                [name]: value
            })

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
            <label for="html">HTML</label><br />
            <input type="radio" id="css" name="fav_language" value="CSS" onChange={(e) => handleChange(e)} />
            <label for="css">CSS</label><br />
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" onChange={(e) => handleChange(e)} />
            <label for="javascript">JavaScript</label>
            <br />
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={(e) => handleChange(e)} />
            <label for="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onChange={(e) => handleChange(e)} />
            <label for="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onChange={(e) => handleChange(e)} />
            <label for="vehicle3"> I have a boat</label><br />
            <button >Create user</button>
        </div>
    )
}
