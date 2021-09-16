import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";
import Counter from "./Pages/Counter";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/counter" />
        </Route>

        <Route path="/counter" component={Counter} />

        {/* Error page */}
        <Route path="*">
          <h1>Wrong</h1>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
