import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter basename='/react'>
      <Link to='/'>首页</Link>
      <Link to='/about'>关于</Link>
      <Route path='/' exact render={() => (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
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
        </div>
      )}>

      </Route>
      <Route path="/about" render={()=>(
        <div>
          关于页面是234绿卡就是段落副科级
        </div>
      )}>

      </Route>
    </BrowserRouter>
  );
}

export default App;
