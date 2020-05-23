import React, { useEffect, useState } from 'react'
import { Grid, Button } from '@material-ui/core'
import Logout from '../Logout/Logout'


const HomePage = props => {

    const [logout, setLogout] = useState(false)
    const toggleHandleLogout = () => {
        setLogout(!logout)
    }

    return (
        <div>
            <span>Home</span>
            <Button onClick={toggleHandleLogout} color="primary"
            >Logout</Button>
            {
                logout ?
                    <Logout handleClose={toggleHandleLogout} />
                    :
                    null
            }
        </div>
    )
}

export default HomePage