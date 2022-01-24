import './App.css'
import {Route, Switch} from 'react-router-dom'
import router from './router'
import Loading from './views/Loading'

function App() {
  return (
    <div className="App">
      <Switch>
        {
          router.map(({exact, path, key, view: View, ...rest}) => {
            return (<Route
              key={key}
              exact={exact}
              component={View}
              path={path}
              {...rest}
            />)
            }
          )
        }
      </Switch>
      <Loading />
    </div>
  )
}

export default App
