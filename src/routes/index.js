import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Deliverymans from '../pages/Deliverymans';
// import Deliverys from '../pages/Deliverys';
// import ProblemsAdmin from '../pages/ProblemsAdmin';
// import Recipients from '../pages/Recipients';
import NotFound from '../pages/NotFound';
import SignIn from '../pages/SignIn';
import Route from './Routes';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/deliverymans" component={Deliverymans} isPrivate />
      <Route path="/" component={() => <NotFound />} />
    </Switch>
  );
}
