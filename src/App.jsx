import { Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './pages/Home'
import Edit from './pages/Edit'
// import './App.css'

function App() {

  return (
    <div  className='app'>
      <h1 style={{textAlign:"center", padding:'20px'}}>Meme Generator</h1>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit' element={<Edit/>} />
      </Routes>
    </div>
  )
}

export default App
