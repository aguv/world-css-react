import React, {useState} from 'react'
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SingleCountry from './components/SingleCountry';
import './theme.css';
import './App.css';

function App() {
  const [theme, setTheme] = useState<string>('light');

  const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <div className={`App ${theme}`}>
      <Navbar toggleTheme={toggleTheme} theme={theme}/>
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='/:name' render={({match}) => <SingleCountry match={match} theme={theme}/>} />
      </Switch>
    </div>
  )
}

export default App
