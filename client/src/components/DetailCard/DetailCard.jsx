import style from './DetailCard.module.css'

const DetailCard = ({name,flag,continent,capital,activities,id,area,subRegion,population})=>{

    return(
       
        <div className={style.card}>
            <img className={style.img} src={flag}/>
            <div className={style.name}>
            <h2>{name}</h2>
            </div>
            <h3>{id}</h3>
            <h3>{capital}</h3>
            <h3>{continent}</h3>
            <h3>{subRegion}</h3>
            <h3>{area}</h3>
            <h3>{population}</h3>
            <div>{activities?.flat().map((act,index) => <h4 key={index} >{act}</h4>)}</div>

        </div>

        
    )
}



export default DetailCard;