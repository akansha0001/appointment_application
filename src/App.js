import logo from './logo.svg';
import { lazy, Suspense } from "react"
import './App.css';
import { CircularProgress } from "@material-ui/core"
import { Route, Switch, BrowserRouter } from "react-router-dom"
import routeComponent from './routes/routeComponent';
const Home = lazy(() => import("./component/Home"))

function App() {
  return (
    <div className="App">
      <Suspense fallback={<CircularProgress />}>
        <BrowserRouter>
          <Switch>
            {routeComponent.map((prop, key) => {
              return (
                <Route
                  exact path={prop.path}
                  component={prop.component}
                  key={key}
                ></Route>
              )
            })}
            <Route
              exact path={"/home"}
              component={Home}
            ></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
