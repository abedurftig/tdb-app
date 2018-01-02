import './styles/main.scss'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './app/store'
import App from './app/app'

import {withRouter} from 'react-router'
const NonBlockApp = withRouter(App)

const target = document.querySelector('#app')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <NonBlockApp />
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)