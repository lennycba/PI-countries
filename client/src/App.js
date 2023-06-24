import './App.css';
import {Route,useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Home from './views/Home/Home';
import Form from './views/Form/Form';
import Detail from './views/Detail/Detail';
import ROUTES from './helpers/routes.helpers'
import NavBar from './components/NavBar/NavBar';
import Landing from './views/Landing/Landing';
import {getCountries,getActivities,getContinents} from '../src/redux/actions'
import {useDispatch,useSelector} from 'react-redux'

function App() {
  const countries = useSelector((state)=>state.countries)
const dispatch = useDispatch()

  useEffect(()=>{
  if(!countries.length > 0){
    dispatch(getCountries())
  } 
},[])

const activities = useSelector((state)=> state.activities)
  const continents = useSelector((state)=> state.continents)

  
  useEffect(()=>{
    !activities.length && dispatch(getActivities())
    !continents.length && dispatch(getContinents()) 
  },[dispatch])

  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== ROUTES.LANDING && <NavBar />}
        <Route exact path={ROUTES.LANDING} render={ () =>  <Landing /> } />
        <Route exact path={ROUTES.HOME} render={ () =>  <Home /> } />
        <Route exact path={ROUTES.FORM} render={ () => <Form /> } />
        <Route exact path={`${ROUTES.DETAIL}/:id`} render={ () => <Detail />} />
 
    </div>
  );
}

export default App;
