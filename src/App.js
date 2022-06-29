
import React, { Component } from 'react'
import "./App.css"
import{Route, Routes, BrowserRouter} from 'react-router-dom'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import Pagination from './Components/Pagination'
import Favourites from './Components/Favourites'
export default class App extends Component {

  render() {
    return (
        <>
        <NavBar/>
        <Routes>
          <Route path='/' element={
            <>
            <Banner/>
            <Movies/>
            <Pagination/>
            </>
          }/>
          <Route path='/favourites' element={<Favourites/>}/>
        </Routes>
        </>
    )
  }
}




