import { ContextWrapper } from "../../core/Context";
import Header from "../components/HOC/Header";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import routes from "../../constants/routes";

function App() {
  return (
    <>
      <Router>
        <ContextWrapper>
          <Header>
            <Switch>
              {routes.map((el) => (
                <Route path={el.path} component={el.component} exact></Route>
              ))}
            </Switch>
          </Header>
        </ContextWrapper>
      </Router>
    </>
  );
}

export default App;
