import React from 'react'

import { createBrowserRouter } from 'react-router'

import AuthLayout from '../layouts/AuthLayout'
import DashboardLayout from '../layouts/DashboardLayout'

import LoginRoute from '../routes/LoginRoute'
import RegisterRoute from '../routes/RegisterRoute'
import MapRoute from '../routes/MapRoute'
import AnalyticsRoute from '../routes/AnalyticsRoute'
import FavoritesRoute from '../routes/FavoritesRoute'
import ProfileRoute from '../routes/ProfileRoute'
import LocationDetailsRoute from '../routes/LocationDetailsRoute'
import ErrorRoute from '../routes/ErrorRoute'

import { locationsService } from '../services/locationsService'

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorRoute />,
    children: [
      {
        index: true,
        Component: LoginRoute,
      },
      {
        Component: AuthLayout,
        children: [
          {
            path: 'login',
            Component: LoginRoute,
          },
          {
            path: 'register',
            Component: RegisterRoute,
          },
        ],
      },
      {
        path: 'dashboard',
        Component: DashboardLayout,
        children: [
          {
            index: true,
            Component: MapRoute,
            loader: () => locationsService.get(),
            errorElement: <ErrorRoute />,
          },
          {
            path: 'map',
            loader: () => locationsService.get(),
            Component: MapRoute,
            errorElement: <ErrorRoute />,
          },
          {
            path: 'analytics',
            Component: AnalyticsRoute,
          },
          {
            path: 'favorites',
            Component: FavoritesRoute,
          },
          {
            path: 'profile',
            Component: ProfileRoute,
          },
          {
            path: 'location/:id',
            loader: ({ params }) => locationsService.get(params.id),
            Component: LocationDetailsRoute,
            errorElement: <ErrorRoute />,
          },
        ],
      },
    ],
  },
])
