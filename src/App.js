import React from 'react'
import Messages from './Components.js/Messages.js'
import MessageInput from './Components.js/MessageInput.js'
import SingleMessage from './Components.js/SingleMessage.js'
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends React.Component {

  state = {
    messages: [],
    singleMessage: null
  }

  render() {
    const {messages, singleMessage} = this.state


    // Create the message
    const addMessage = (obj) => {
      const id = uuidv4(); 
      obj.id = id
      this.setState({messages: [...messages, obj ]})
    }

    // Delete the message
    const deleteMessage = (id) => {
      this.setState({messages: messages.filter(message => message.id !== id)})
    }

    // Select a single message
    const selectSingleMessage = (message) => {
      this.setState({singleMessage: message})
    }

    // Clear single message
    const clearSingleMessage = () => {
      this.setState({singleMessage: null})
    }

    // Edit message
    const editMessage = (obj) => {
      const updatedMessages = messages.map(message => {
        if(obj.id === message.id) {
          message.messageBody = obj.messageBody
        }
        return message
      })
      this.setState({messages: updatedMessages})
      this.setState({singleMessage: null})
    }

    if(singleMessage) {
      return (
        <div className="container">
          <SingleMessage singleMessage={singleMessage} clearSingleMessage={clearSingleMessage} editMessage={editMessage}/>
        </div>
      )
    }

    return(
      <center>
      <div className="container">
        <h1 id="logo">"What's your thoughts"</h1>
        <MessageInput addMessage={addMessage}/>
        <Messages messages={messages} deleteMessage={deleteMessage} selectSingleMessage={selectSingleMessage}/>
      </div>
      </center>
    )
  }
}

export default App;




{/* create functionality for following:

      - Ability to create new messages
      - Ability to click on a single message and view it with conditional rendering
      - Ability to edit single message
      - Ability to delete single message

      -- By default, the user should see the input field for creating a new message. Under the input field, all messages that have been created should appear. 

      -- Techniques used: conditional rendering, controlled components, passing state as props

      -- Each message should have a messageBody, a userName, and a unique ID.

      -- Packages to use: axios, uuid (for creating unique id for each message).
      */}