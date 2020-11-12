import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home';
import Questions from '../src/components/Questions'
import store from './redux/store'
import { Provider } from 'react-redux';


function App() {
  return (
    
      <BrowserRouter>
          <Provider store = {store} >
            <Switch>
              <Route path = "/"  exact component = {Home} />
              <Route path = "/questions" component = {Questions} />
            </Switch>
          </Provider>
      </BrowserRouter>
  );
}

export default App;
