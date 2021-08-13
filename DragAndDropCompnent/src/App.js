import React from 'react';
import Draganddrop from './draganddrop';
import './App.css';

function App() {
  return (
    <div>
        <p className="title">Drag and Drop File Upload</p>
        <div className="content">
          <Draganddrop />
        </div>
    </div>
  );
}

export default App;
