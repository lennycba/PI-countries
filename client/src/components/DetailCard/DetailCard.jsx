import style from "./DetailCard.module.css";
import checkIcon from "../../images/iconos/check.svg";

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

  const puntoDeMil = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1.';
    let arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp,rep);
    return arr[1] ? arr.join('.'): arr[0];
  }

  return (
    <div className={style.card}>
      <div className={style.img}>
        <img src={flag} />
      </div>
      <div className={style.data}>
        <h2>Id: {id}</h2>
        <h2>Name: {name}</h2>
      </div>
      <div className={activities?.length ? style.specs : style.specsL}>
        <h3>Continent: {continent}</h3>
        <h3>Sub Region: {subRegion}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Population: {population? puntoDeMil(population):null}</h3>
        <h3>Area {area? puntoDeMil(area):null}m2</h3>
      </div>
      {activities?.length > 0 && (
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
      )}
    </div>
  );
};

export default DetailCard;
