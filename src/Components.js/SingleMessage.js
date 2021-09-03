import React, {Fragment} from 'react'
import EditMessage from './EditMessage'

class SingleMessage extends React.Component {

    state = {
        edit: false
    }

    render() {

        const {edit} = this.state
        const {singleMessage, clearSingleMessage, editMessage} = this.props
        
        const handleClearSingleMessage = () => {
            clearSingleMessage()
        }

        const handleEditStateChange = () => {
            this.setState({edit: true})
        }
        
        return (
            <Fragment>
                <center>
                <h1 id="logo">"Single Message"</h1>
                <h1>{singleMessage.messageBody}</h1>
                <p>{singleMessage.id}</p>
                <button className="btn hover" onClick={handleClearSingleMessage}>Back</button>
                <button className="btn hover edit" onClick={handleEditStateChange}>Edit</button>
                {edit && <EditMessage singleMessage={singleMessage} editMessage={editMessage} />}  
                </center>      
            </Fragment>
        )
    }
}

export default SingleMessage
