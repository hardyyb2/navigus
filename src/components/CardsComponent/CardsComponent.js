import React from 'react'
import UsersList from './UsersList/UsersList'

//main card to display different types of users
const CardComponent = ({ totalUsers, type }) => {
    return totalUsers.length !== 0 ?
        (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <UsersList clients={totalUsers} type={type} />
            </div>
        )
        :
        null
}

export default CardComponent


