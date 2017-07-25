import React from 'react'
import { Link, Route } from 'react-router-dom'
import App from './todo/app.jsx'

import AccountsUIWrapper from './accounts-ui-wrapper.jsx'

export class Routes extends React.Component {
  render () {
    return (
      <div className="sans-serif">
        <AccountsUIWrapper />
        <Route exact path='/' component={App} />
      </div>
    )
  }
}
