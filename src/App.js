import React from 'react';
import TopicForm from './Components/TopicForm/TopicForm';
import MessageList from './Components/MessageList/MessageList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Chat App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <TopicForm />
        <MessageList />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
