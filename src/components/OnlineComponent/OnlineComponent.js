import React from 'react';
import { connect } from 'react-redux'

import AvatarGroup from '@atlaskit/avatar-group'
// import { getAdorableAvatar } from '@atlaskit/avatar-group/examples-util/data.ts'

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

const ChatList = ({ clients }) => {
    const data = clients.map(client => ({
        ...client,
        appearance: 'circle',
        enableTooltip: true,
        size: 'medium',
        // src: getAdorableAvatar(client),
        // status: getStatus(),
    }))
    return <AvatarGroup
        appearance="stack"
        onAvatarClick={console.log}
        data={data}
        size="large"
    />
};

const mapStateToProps = state => {
    return {
        totalClients: state.users.totalClients
    }
}

export default connect(mapStateToProps)(ChatComponent)