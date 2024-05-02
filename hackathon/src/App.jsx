import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Discover from './pages/Discover';


function App() {
  
  return (
   <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/discover' element={<Discover />} />
      </Routes>
    </BrowserRouter>
   </div>
  )
}

export default App
