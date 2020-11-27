import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/header/Navbar';
import Home from './components/pages/home/Home';
import Android from './components/pages/android/Android';
import GadgetLocalHub from './components/pages/gadget/Gadget';
import PublicServer from './components/pages/publicServer/PublicServer';
import WebServer from './components/pages/webServer/WebServer';
import About from './components/pages/about/About';
import Main from './components/pages/main/Main';


function App() {
  return (
    <div className="App">
         <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/Home' exact component={Home} />
          <Route path='/Android' exact component={Android} />
          <Route path='/Gadget' exact component={GadgetLocalHub} />
          <Route path='/PublicServer' exact component={PublicServer} />
          <Route path='/WebServer' exact component={WebServer} />
          <Route path='/About' exact component={About} />
        </Switch>
        </Router>

    </div>
  );
}

export default App;
