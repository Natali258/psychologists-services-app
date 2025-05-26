import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'

export const Loyout = () => {
  return (
    <div>
        <Header/>
        <Outlet />
    </div>
  )
}
