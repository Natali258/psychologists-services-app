
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { PsychologistsPage } from './pages/Psychologists/PsychologistsPage';
import { FavoritesPage } from './pages/Favorites/FavoritesPage';
import { Loyout } from './components/Loyout';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Loyout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='psychologists' element={<PsychologistsPage/>}/>
          <Route path='favorites' element={<FavoritesPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
