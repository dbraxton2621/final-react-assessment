import React, {Fragment} from 'react'

class EditMessage extends React.Component {
    state = {
        text: ''
    }

    render() {

        const {text} = this.state
        const {singleMessage, editMessage} = this.props

        const handleChange = (e) => {
            this.setState({text: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const updatedMessage = {
                messageBody: text,
                id: e.target.id
            }

            editMessage(updatedMessage)
        }

        return(
            <Fragment>
                <center>
                <h1 id="logo">Edit Message</h1>
                <form onSubmit={handleSubmit} id={singleMessage.id}>
                    <input className="label" type="text" value={text} onChange={handleChange}/>
                    <input type="submit" className="btn hover"/>
                </form>
                </center>
            </Fragment>
        )
    }
}

export default EditMessage
