import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router'

function Users() {
    const navigate = useNavigate()
    const [storedUsers, setStoredUsers] = useState([])

    useEffect(() => {
        setStoredUsers(JSON.parse(localStorage.getItem('users')) || [])
    }, [])

    const handleEdit = (index) => {
        navigate('/signup?id=' + index)
    }

    const handleDelete = (index) => {
        const ans = confirm('Are you sure to delete this user')
        if (ans) {
            const data = JSON.parse(localStorage.getItem('users'))
            const filteredData = data.filter((el, i) => i !== index)
            localStorage.setItem('users', JSON.stringify(filteredData))
            setStoredUsers(filteredData)
        }
    }

    return (
        <div>
            <Link to={'/signup'}>to Sign up</Link>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Fav Language</th>
                    <th>Vehicles</th>
                    <th></th>
                    <th></th>
                </tr>
                {storedUsers.map((el, i) => {
                    return (
                        <tr>
                            <td>{el.fName}</td>
                            <td>{el.lName}</td>
                            <td>{el.email}</td>
                            <td>{el.fav_language}</td>
                            <td>{el.vehicleInfo?.join(', ')}</td>
                            <td onClick={() => handleEdit(i)}>Edit</td>
                            <td onClick={() => handleDelete(i)}>Delete</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    )
}

export default Users
