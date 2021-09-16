import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";
import Counter from "./Pages/Counter";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/counter" />
        </Route>

        <Route path="/counter" component={Counter} />

        {/* Error page */}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Layout>
  );
}

export default App;
