import React from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

const ChatLog = (props) => {
  const chatLog = props.messages.map((message,index) => {
    return <section className = {message.sender === props.messages[0].sender ? "chat-entry local" : "chat-entry remote"}>
      <h2 className="entry-name">{message.sender}</h2>
      <Message
      sender={message.sender}
      body={message.body}
      timeStamp={message.timeStamp}
      key={index}
      />
      </section>
    });
  // Fill in your code here
  return(
    <section className="chat-log">
      {chatLog}
    </section>
  );
}

ChatLog.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default ChatLog;
