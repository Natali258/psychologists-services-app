
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { PsychologistsPage } from './pages/Psychologists/PsychologistsPage';
import { FavoritesPage } from './pages/Favorites/FavoritesPage';
import { Loyout } from './components/Loyout';
import {PrivateRoute} from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Loyout/>}>
          <Route index element={<PublicRoute><HomePage/></PublicRoute>}/>
          <Route path='psychologists' element={<PublicRoute><PsychologistsPage/></PublicRoute>}/>
          <Route path='favorites' element={<PrivateRoute><FavoritesPage/></PrivateRoute>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
