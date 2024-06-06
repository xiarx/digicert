import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import type {FC} from 'react'

import Index from '@routes/index'

export enum Path {
  INDEX = '/'
}

const Router: FC = (): JSX.Element => {
  return <BrowserRouter>
      <Route path={Path.INDEX} render={() => <Index />}/>
  </BrowserRouter>
}

export default Router
