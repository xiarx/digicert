import React from 'react'
import {createBrowserRouter} from 'react-router-dom'

import type {FC} from 'react'

import Index from '@routes/index'
import Movies from '@routes/movies'
import Carousel from '@routes/carousel'
import Error from '@routes/error'

export enum Path {
  INDEX = '/',
  MOVIES = '/movies',
  CAROUSEL = '/carousel',
  ERROR = '/error',
}

const router = createBrowserRouter([
  {
    path: Path.INDEX,
    element: <Index />,
  },
  {
    path: Path.MOVIES,
    element: <Movies />,
  },
  {
    path: Path.CAROUSEL,
    element: <Carousel />,
  },
  {
    path: '*',
    element: <Error />,
  },
])

export default router
