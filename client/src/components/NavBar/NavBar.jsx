import React from 'react'
import style from './NavBar.module.css';
import SearchBar from '../SearchBar/SearchBar';
import {Link,useLocation} from 'react-router-dom';
import ROUTES from '../../helpers/routes.helpers';


function NavBar() {
  const location = useLocation();



  return (
    <div className={style.NavContainer}>
      <div>
          <SearchBar />
      </div>
      <div className={style.buttonsContainer} >
        <Link to={ROUTES.LANDING}><button className={style.link} >Back to info</button></Link>
        {location.pathname === ROUTES.HOME?
        <Link to={ROUTES.FORM}><button className={style.link}>new turistic activity</button></Link>
        : <Link to={ROUTES.HOME}><button className={style.link}>Back to Home</button></Link>}

      </div>
    </div>
  )
}

export default NavBar