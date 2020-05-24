
import React, { useState } from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';


import { getAdorableAvatar } from '../../../assets/AdorableAvatar/AdorableAvatar'
import UserModal from '../../../UI/Modal/Modal';
import CurrentlyViewedUser from '../../CurrentlyViewedUser/CurrentlyViewedUser';
import { StyledBadge } from '../../../UI/StyledBadge/StyledBadge'
import { LightTooltip } from '../../../UI/LightToolTip/LightToolTip'

import { getAvatarData, getTotalUsers, clearAvatarData } from '../../../store/actions'


//Material UI custo styles
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    toolTipAll: {
        cursor: 'pointer',
        borderRadius: '50%',
        float: 'left'

    },
    brighttooltip: {
        filter: 'brightness(140%)',
        '&:hover': {
            filter: 'brightness(160%)',
            transition: 'all 0.2s ease-out'
        },

    },
    dulltooltip: {
        filter: 'brightness(40%)',
        '&:hover': {
            filter: 'brightness(80%)',
            transition: 'all 0.2s ease-out'
        },
    },
    avatarGroup: {
        width: '100%',
        display: 'inline-block'
    }
}));


//Component to display different types of users
const UsersList = ({ clients, type, clearAvatarData, getAvatarData, totalClients }) => {
    const classes = useStyles()
    //open  modal on avatar click, shows their details filled during signup
    const [modalOpen, setModalOpen] = useState(false)

    const isOnline = client => totalClients.indexOf(client) !== -1

    return (
        <>
            <AvatarGroup max={50} className={classes.avatarGroup}>
                {
                    clients.map((client, index) =>

                        //tooltip component for every avatar
                        <LightTooltip arrow title={client} key={index} className={

                            `${classes.toolTipAll}  ${type === 'online' ?
                                classes.brighttooltip
                                :
                                (
                                    type === 'offline' ? classes.dulltooltip
                                        :
                                        isOnline(client) ?
                                            classes.brighttooltip :
                                            classes.dulltooltip
                                )

                            }`}>
                            {
                                type === 'online' ?
                                    //badges for all online avatar
                                    <StyledBadge
                                        overlap="circle"
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        badgeContent=" "
                                    >
                                        <Avatar alt={client} src={getAdorableAvatar(client)} className={classes.large}
                                            onClick={() => {
                                                setModalOpen(true)
                                                getAvatarData(client)
                                            }}
                                        />
                                    </StyledBadge>
                                    :
                                    (
                                        type === 'offline' ?
                                            <Avatar alt={client} src={getAdorableAvatar(client)} className={classes.large}
                                                onClick={() => {
                                                    setModalOpen(true)
                                                    getAvatarData(client)
                                                }} />
                                            :
                                            //check online status for mixed users
                                            isOnline(client) ?
                                                <StyledBadge
                                                    overlap="circle"
                                                    anchorOrigin={{
                                                        vertical: 'top',
                                                        horizontal: 'right',
                                                    }}
                                                    badgeContent=" "
                                                >
                                                    <Avatar alt={client} src={getAdorableAvatar(client)} className={classes.large}
                                                        onClick={() => {
                                                            setModalOpen(true)
                                                            getAvatarData(client)
                                                        }} />
                                                </StyledBadge>
                                                :

                                                <Avatar alt={client} src={getAdorableAvatar(client)} className={classes.large}
                                                    onClick={() => {
                                                        setModalOpen(true)
                                                        getAvatarData(client)
                                                    }}
                                                />

                                    )
                            }
                        </LightTooltip>
                    )
                }
            </AvatarGroup>
            {
                modalOpen ?
                    //custom modal
                    <UserModal handleClose={() => {
                        setModalOpen(false)
                        clearAvatarData()
                    }}>
                        {/* modal content passed as children */}
                        <CurrentlyViewedUser handleClose={() => {
                            setModalOpen(false)
                            clearAvatarData()
                        }} />
                    </UserModal>
                    : null

            }
        </>
    )
}


const mapStateToProps = state => {
    return {
        totalClients: state.users.totalClients
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTotalUsers: () => dispatch(getTotalUsers()),
        getAvatarData: (clientEmail) => dispatch(getAvatarData(clientEmail)),
        clearAvatarData: () => dispatch(clearAvatarData())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)