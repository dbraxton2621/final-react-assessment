import React from 'react'
import MessageItem from './MessageItem'

class Messages extends React.Component {
    render() {

        const {messages, deleteMessage, selectSingleMessage} = this.props

        return(
            <div>
                {messages.map(message => (
                    <MessageItem message={message} key={message.id} deleteMessage={deleteMessage} selectSingleMessage={selectSingleMessage}/>
                ))}
            </div>
        )
    }
}

export default Messages
