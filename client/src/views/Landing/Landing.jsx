
import style from './Landing.module.css';
import React from 'react';

import {Link} from 'react-router-dom';
import ROUTES from '../../helpers/routes.helpers';

function Landing() {
  return (
    <div className={style.container} >
        <div className={style.title} >
          <div>
            Bienvenido a Henry Countries...
          </div>
          <div>
            Una aplicacion donde podrás conocer mas acerca de los distintos paises
            ademas de crear actividades turísticas para cada uno de ellos
          </div>
        </div>
        <Link className={style.link} to={ROUTES.HOME}>
            Ir al Home
        </Link>
    </div>

  )
}

export default Landing