import React from 'react'

class MessageItem extends React.Component {
    render() {

        const {message, deleteMessage, selectSingleMessage} = this.props

        const handleDelete = (e) => {
            deleteMessage(e.target.id)
        }

        return(
            <div className="listItem">
                <p>{message.messageUser}</p>
                <h2 className="hover" onClick={() => selectSingleMessage(message)} >{message.messageBody}</h2>
                <p>{message.id}</p>
                <button className="btn hover" id={message.id} onClick={handleDelete}>Delete</button>
            </div>
        )
    }
}

export default MessageItem