import React from 'react';

const ChatComponent = (props) => {
    return (
        <div>
            <h5>List of active people</h5>
            <ChatList people={props.people} />
        </div>
    );
};

const ChatList = (props) => {
    return <ul>{props.people.map((person) => <li>{person}</li>)}</ul>;
};


export default ChatComponent;