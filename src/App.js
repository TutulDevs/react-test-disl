import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./Layout/Layout";
import Counter from "./Pages/Counter";
import ErrorPage from "./Pages/ErrorPage";
import Form from "./Pages/Form";
import List from "./Pages/List";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/counter" />
        </Route>

        <Route path="/counter" component={Counter} />
        <Route path="/form" component={Form} />
        <Route path="/list" component={List} />

        {/* Error page */}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Layout>
  );
}

export default App;
