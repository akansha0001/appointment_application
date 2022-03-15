import { Suspense } from "react"
import './App.css';
import { CircularProgress } from "@material-ui/core"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import routeComponent from './routes/routeComponent';
import { store, persistor } from "./Reducer/store"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/es/integration/react"

function App() {
  const currentURL = window.location.href
  const pathname = window.location.pathname
  console.log(currentURL, currentURL)
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
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
                {pathname === '/' && (
                  < Redirect to="/login" />
                )}
              </Switch>
            </BrowserRouter>
          </Suspense>
        </PersistGate>
      </Provider>
    </div >
  );
}

export default App;
