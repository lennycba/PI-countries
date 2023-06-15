import style from './Card.module.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../helpers/routes.helpers';

const Card = ({name,flag,continent,capital,ID})=>{
    return(
       
        <div className={style.card}>
            <Link to={`${ROUTES.DETAIL}/${ID}`} className={style.link}>
            <img className={style.img} src={flag}/>
            <div className={style.name}>
                <h2>{name}</h2>
            </div>
            <div className={style.continent}>
                <h3>{continent}</h3>
            </div>
            </Link>
        </div>

        
    )
}


export default Card;