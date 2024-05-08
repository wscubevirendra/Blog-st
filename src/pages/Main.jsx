import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import TypeAnim from '../components/TypeAnim'

export default function Main() {
  return (
    <>
    <Header/>
    <Outlet/>
    <TypeAnim/>
    <Footer/>
    </>

  )
}
