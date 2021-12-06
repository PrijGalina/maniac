
import {
  Switch,
  Route,
  BrowserRouter as Router,
} from '../common/common';
import DetailedQuest from '../detailed-quest/detailed-quest';
import Contacts from '../contacts/contacts';
import Home from '../home/home';

import {AppRoute} from '../../const';

const App = () => (
  <>

    <Router>
      <Switch>
        <Route exact path={AppRoute.Quest}>
          <DetailedQuest />
        </Route>
        <Route exact path={AppRoute.Contacts}>
          <Contacts />
        </Route>
        <Route path={AppRoute.Root}>
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
