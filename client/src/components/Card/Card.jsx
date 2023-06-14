import style from './Card.module.css';
import { Link } from 'react-router-dom';
import ROUTES from '../../helpers/routes.helpers';

const Card = ({name,flag,continent,capital,ID})=>{
    return(
       
        <div className={style.card}>
            <Link to={`${ROUTES.DETAIL}/${ID}`}>
            <img className={style.img} src={flag}/>
            <div className={style.name}>
                <h2>{name}</h2>
            </div>
            <h3>{capital}</h3>
            <h3>{continent}</h3>
            </Link>
        </div>

        
    )
}


export default Card;