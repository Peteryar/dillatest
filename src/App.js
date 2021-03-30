import './App.css';
import Logo from './components/Logo';
import { useState } from 'react';
import Main from './Main/Main';
import Admin from './Admin/Admin';
import Radio from './components/Radio';

function App() {
  const [mode, setMode] = useState("Main");
  return (
    <div className="container">
      <header>
        <Logo />
        <div className="radio-container">
          <Radio switchMode={val => setMode(val)} mode="Main" label="Main Mode" />
          <Radio switchMode={val => setMode(val)} mode="Admin" label="Admin Mode" />
          {/* <label>
            <input onClick={(e) => setMode(e.target.value)} name="main-admin" value="Main" type="radio" />
                Main Mode
              </label>
          <label>
            <input onClick={(e) => setMode(e.target.value)} name="main-admin" value="Admin" type="radio" />
                Admin Mode
              </label> */}
        </div>
      </header>
      <main>
        {mode === "Main" ? <Main /> : <Admin />}
      </main>
    </div>
  );
}

export default App;
