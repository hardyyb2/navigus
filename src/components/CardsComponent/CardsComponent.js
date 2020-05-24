import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

// import AvatarGroup from '@atlaskit/avatar-group'
import { Tooltip, makeStyles, withStyles } from '@material-ui/core';

import { getAdorableAvatar } from '../../assets/AdorableAvatar/AdorableAvatar'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Badge from '@material-ui/core/Badge';

import { getAvatarData, getTotalUsers, clearAvatarData } from '../../store/actions'
import UserModal from '../../UI/Modal/Modal';
import CurrentlyViewedUser from '../CurrentlyViewedUser/CurrentlyViewedUser';

// import { getTotalUsers } from 

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

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: '#f5f5f5',
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: '0.8rem',

    },
}))(Tooltip);

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(3.4)',
            opacity: 0,
        },
    },
}))(Badge);



const CardComponent = ({ clearAvatarData, getTotalUsers, getAvatarData, totalClients, totalUsers, type }) => {

    return totalUsers.length !== 0 ?
        (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ChatList clearAvatarData={clearAvatarData}
                    clients={totalUsers} type={type} totalClients={totalClients} getTotalUsers={getTotalUsers} getAvatarData={getAvatarData} />

            </div>
        )
        :
        null
}



const ChatList = ({ clearAvatarData, getTotalUsers, getAvatarData, totalClients, clients, type }) => {
    const classes = useStyles()
    const [modalOpen, setModalOpen] = useState(false)
    // useEffect(() => {
    //     // getTotalUsers()
    // }, [totalClients])

    const isOnline = client => totalClients.indexOf(client) !== -1


    return (
        <>
            <AvatarGroup max={50} className={classes.avatarGroup}>
                {
                    clients.map((client, index) =>
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
                    <UserModal handleClose={() => {
                        setModalOpen(false)
                        clearAvatarData()
                    }}>
                        <CurrentlyViewedUser />
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

export default connect(mapStateToProps, mapDispatchToProps)(CardComponent)