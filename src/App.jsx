
import './App.css'
import SearchResultCard from './components/SearchResultCard'

import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import SearchPage from './pages/SearchPage'
import VideoContainer from './components/VideoContainer'
function App() {
 

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} >
    <Route path='/' element={<VideoContainer />} />
    <Route path='search/:q' element={<SearchPage />} />
    {/* <Route path='/search/:q' element={<v />} /> */}
    </Route>
  </Routes>
  </BrowserRouter>
    
    </>
  )
}

export default App
