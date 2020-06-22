import React from 'react';
import Tabbar from './component/Tabbar'
import '../src/assets/css/index.css'
import {BrowserRouter} from 'react-router-dom'
function App() { 
  return (
    <BrowserRouter>
      <div className="App">
        <Tabbar />

      </div>
    </BrowserRouter>
  );
}

export default App;
