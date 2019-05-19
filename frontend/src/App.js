import React from 'react';
import './styles.css'

import Header from './components/Header'
import Main from './pages/main'
import Register from './pages/register'

const App = () => (
  <div className="App">
      <Header />
      <Register />
      <Main />

    </div>
  
)

export default App;
