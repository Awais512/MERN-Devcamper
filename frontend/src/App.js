import React from 'react';
import Layout from './components/shared/Layout';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Bootcamps from './pages/Bootcamps';

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/bootcamps' component={Bootcamps} />
          </Switch>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
