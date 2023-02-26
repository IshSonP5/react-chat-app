import React from "react";
import TopicForm from "./Components/TopicForm/TopicForm";
import MessageList from "./Components/MessageList/MessageList";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  const [messages, setMessages] = React.useState([
    {
      name: "Host 1",
      message: "I am ready to go!",
      id: 1
    },
    {
      name: "Host 2",
      message: "I am not ready to go!",
      id: 2
    }
  ]);

  function addItem(name, message) {
    setMessages(oldMessages => {
      // clone old value to seperate
      const newMessages = structuredClone(oldMessages);
      // update the new value
      newMessages.push({
        name,
        message,
        liked: false,
        id: new Date().getTime()
      });
      //return updated new messages
      return newMessages;
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Chat App</p>
      </header>
      <main>
        <TopicForm addItem={addItem} />
        <MessageList messages={messages} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
