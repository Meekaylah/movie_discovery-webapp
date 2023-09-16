import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/home'
import MovieDetail from './pages/movieDetail/movieDetail'
import Error from './pages/error/error'

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='movies/:id' element={<MovieDetail/>}></Route>
            <Route path='/*' element={<Error />}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
