import React from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import Home from './Component/Mainpage/Home'
import About from './Component/About/About'
import Contatc from './Contact/Contatc'
import Blog from './Component/Blogs/Blog'
import Services from './Component/Service/Services'
import Blogdetail from './Component/Blogs/Blogpage/Blogdetail'
import Event from './Component/Event/Event'
function App() {
  return (
    <div>
      
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/service' element={<Services/>} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/event' element={<Event/>} />
          <Route exact path='/blogdetails/:id' element={<Blogdetail />} />

          <Route exact path='/contact' element={<Contatc />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App

