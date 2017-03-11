import React from 'react'
import { Route } from 'react-router'

import MainPage from '../containers/MainPage'
import UserPage from '../containers/UserPage'
import RepoPage from '../containers/RepoPage'

export default <Route path="/" component={MainPage}>
  <Route path="/:login/:name"
         component={RepoPage} />
  <Route path="/:login"
         component={UserPage} />
</Route>