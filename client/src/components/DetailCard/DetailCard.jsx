import style from "./DetailCard.module.css";
import checkIcon from '../../images/iconos/check.svg'

const DetailCard = ({
  name,
  flag,
  continent,
  capital,
  activities,
  id,
  area,
  subRegion,
  population,
}) => {
  return (
    <div className={style.card}>
      <img className={style.img} src={flag} />
            <div className={style.countId}>
            <h3>Id: {id}</h3>
            </div>
        <div className={style.countName}>
            <h2>Name: {name}</h2>
        </div>
        <div className={style.specs}>
            <h3>Continent: {continent}</h3>
            <h3>Sub Region: {subRegion}</h3>
            <h3>Capital: {capital}</h3>
            <h3>Population: {population}</h3>
            <h3>Area {area}m2</h3>
        </div>
        <div className={style.act}>
         <h3>Activities: </h3> 
          {activities?.flat().map((act, index) => (
            <div className={style.actItem}>
                <div className={style.check}>
                    <img src={checkIcon} />
                </div> 
                <div className={style.actName}>
                    <h4 key={index}> {act}</h4>
                </div>
            </div>
          ))}
        </div>

    </div>
  );
};

export default DetailCard;
