import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import CreateTask from "./containers/CreateTask/CreateTask";
import GlobalStyle from "./globalStyles";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create_task">
          <CreateTask />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
