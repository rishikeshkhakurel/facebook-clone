import { Route, Switch } from "react-router";
import Header from "./common/component/Header/view/Header";
import Dashboard from "./features/dashboard/Dashboard";
import Profile from "./features/profile/Profile";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
