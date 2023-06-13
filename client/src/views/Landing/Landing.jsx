
import style from './Landing.module.css';
import React from 'react';

import {Link} from 'react-router-dom';
import ROUTES from '../../helpers/routes.helpers';

function Landing() {
  return (
    <div className={style.container} >
        <div className={style.title} >
        Presentacion del proyecto
        </div>
        <Link className={style.link} to={ROUTES.HOME}>
            Ir al Home
        </Link>
    </div>

  )
}

export default Landing