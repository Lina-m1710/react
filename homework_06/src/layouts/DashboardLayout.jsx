import React from 'react'
import { Outlet, NavLink } from 'react-router'

export default function DashboardLayout() {
  return (
    <>
      <aside>
        <nav>
          <ul>
            <li>
              {' '}
              <NavLink to="/dashboard/map">Map</NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="/dashboard/analytics">Analytics</NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="/dashboard/favorites">Favorites</NavLink>
            </li>
            <li>
              {' '}
              <NavLink to="/dashboard/profile">Profile</NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </>
  )
}
