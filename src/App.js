import React from 'react';
import TopicForm from './Components/TopicForm/TopicForm';
import MessageList from './Components/MessageList/MessageList';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Chat App
        </p>
      </header>
      <main>
        <TopicForm />
        <MessageList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
