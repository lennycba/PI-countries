import './App.css';
import {Route,useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import ROUTES from './helpers/routes.helpers'
import NavBar from './components/NavBar/NavBar';
import Landing from './views/Landing/Landing';
import {getCountries} from '../src/redux/actions'
import {useDispatch} from 'react-redux'

function App() {
const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getCountries())
},[])
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== ROUTES.LANDING && <NavBar />}
        {/* {location.pathname === ROUTES.HOME && <NavBar />} */}
        <Route exact path={ROUTES.LANDING} render={ () =>  <Landing /> } />
        <Route exact path={ROUTES.HOME} render={ () =>  <Home /> } />
        <Route exact path={ROUTES.FORM} render={ () => <Form /> } />
 
    </div>
  );
}

export default App;
