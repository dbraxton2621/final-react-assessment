import React from 'react'

class MessageInput extends React.Component {

    state = {
        username: '',
        text: ''
    }

    render() {
        const {username, text} = this.state
        const {addMessage} = this.props

        const handleChangeUser = (e) => {
            this.setState({username: e.target.value})
        }

        const handleChangeBody = (e) => {
            this.setState({text: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            addMessage({messageBody: text}, {messageUser: username})
            this.setState({username: '', text: ''})
        }

        return(
            <form className = 'add-From' onSubmit={handleSubmit}>
                <div className= 'form-control'>
                    <input type="text" className="label" name="username" value={username} onChange={handleChangeUser}/>
                </div>
                <div className= 'form-control'>
                    <input type="text" className="label" name="text" value={text} onChange={handleChangeBody}/>
                </div>
                <input type="submit" className="btn"/>
            </form>
        )
    }
}

export default MessageInput