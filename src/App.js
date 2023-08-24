import React from 'react'
import Page from './components/SecondPage/Page'
import Demo from './components/SecondPage/Demo'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Main from './components/Mainpage/Main'

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/page" element={<Page/>}></Route>
            <Route path="/demo" element={<Demo/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
