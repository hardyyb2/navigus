import React from 'react';
import { connect } from 'react-redux'

// import AvatarGroup from '@atlaskit/avatar-group'
import Tooltip from '@material-ui/core/Tooltip';

import { getAdorableAvatar } from '../../UI/AdorableAvatar/AdorableAvatar'
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const ChatComponent = ({ totalClients }) => {
    return totalClients.length !== 0 ?
        (
            <div>
                <h5>List of active people</h5>
                <ChatList clients={totalClients} />
            </div>
        )
        :
        null
}

const ChatList = ({ clients }) => (
    <AvatarGroup max={8}>
        {
            clients.map((client, index) =>
                <Tooltip title={client.email} key={index}>
                    <Avatar alt={client.email} src={getAdorableAvatar(client.email)} />
                </Tooltip>
            )
        }
    </AvatarGroup>
)

const mapStateToProps = state => {
    return {
        totalClients: state.users.totalClients
    }
}

export default connect(mapStateToProps)(ChatComponent)