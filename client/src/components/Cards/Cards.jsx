import Card from "../Card/Card";
import style from './Cards.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useState,useEffect } from 'react';
import {filterByContinent,orderByName,orderByPop,filterByActivities,updateCont,updateAct} from '../../redux/actions';
import left from '../../images/iconos/arrow-left.png'
import right from '../../images/iconos/arrow-right.png'

const Cards = () => {
    const filteredCountries = useSelector((state) => state.filteredCountries)
    const activities = useSelector((state)=> state.activities)
    const continents = useSelector((state)=> state.continents)
    const sContinent = useSelector((state)=> state.sContinent)
    const sActivity = useSelector((state)=> state.sActivity)

    const [selectedContinent, setSelectedContinent] = useState('')
    const [selectedActivity, setSelectedActivity] = useState('')
    const [orderName,setOrderName] = useState('')
    const [orderPop,setOrderPop] = useState('')
    const [pages,setPages] = useState(1)
    const dispatch = useDispatch();


    useEffect(()=>{
        setSelectedContinent(sContinent)
        setSelectedActivity(sActivity)
    },[])

    //resetear filtros ------------------------------------------------------------
    const handleReset = ()=>{
        dispatch(filterByContinent('All'))
        dispatch(updateCont('All'))
        dispatch(updateAct(''))
        setSelectedContinent('')
        setSelectedActivity('')
        setPages(1)
    }

       
    //filtrar por continente ------------------------------------------------------------
    
    function handleChangeCont(e){
        const value = e.target.value;
        dispatch(filterByContinent(value))
        dispatch(updateCont(value))
        setSelectedContinent(value)
        setPages(1)
        value === 'All' && setSelectedActivity('')
    }
    //----------------------------------------------------------------------

    //filtrar por actividad ------------------------------------------------------------
    
    function handleChangeAct(e){
        const value = e.target.value;
        dispatch(filterByActivities(value));
        dispatch(updateAct(value))
        setSelectedActivity(value);
        setPages(1)
    }
    //----------------------------------------------------------------------

    //ordenar por nombre------------------------------------------------------------

    function handleOrderName(e){
        const value = e.target.value;
        dispatch(orderByName(value))
        setOrderName(value)
    }

    //----------------------------------------------------------------------
    //ordenar por poblacion------------------------------------------------------------

    function handleOrderPop(e){
        const value = e.target.value;
        dispatch(orderByPop(value))
        setOrderPop(value)
    }
    //----------------------------------------------------------------------
     //paginado------------------------------------------------------------
    const goPrevious = () =>{
        if(pages > 1) setPages(pages -1)
    }

    const goNext = () =>{
        if(pages < Math.ceil(filteredCountries.length/15)) setPages(pages +1)
    }


    return (
        <div className={style.cardsContainer} >
            <div className={style.pagination}>
                <button disabled={pages === 1} onClick={goPrevious}><img src={left}/></button>
                <span>Page: {pages}</span>
                {filteredCountries.length? <button disabled={pages === Math.ceil(filteredCountries.length/15)} onClick={goNext}><img src={right}/></button>:
                <button disabled={pages === Math.ceil(filteredCountries.length/15)} onClick={goNext}><img src={right}/></button>
                }
            </div> 
            <div className={style.filtersAndOrders} >
            {/* resetear filtros */}
            <div>
                <button className={style.rButton} onClick={handleReset}>Reset filters</button>
            </div>
            {/* filtro por continente */}
            <div className={style.fContinent} >
            <select onChange={handleChangeCont} value={selectedContinent}> 
                <option disabled selected value=''>Filter by Continent...</option>
                <option value="All">All</option>
                {continents?.map((continent,index) => <option key={index} value={continent}>{continent}</option>)}
            </select>
            </div>
            {/* filtro por actividad */}
            <div className={style.fContinent} >
            <select onChange={handleChangeAct} value={selectedActivity}> 
                <option disabled selected value=''>Filter by Activity...</option>
                {/* <option value='none'>None</option> */}
                <option value="All">All</option>
                {activities?.map((act,index) => <option key={index} value={act.name}>{act.name}</option>)}
            </select>
            </div>
                {/* ordenar por nombre */}
                <div>
                    <select onChange={handleOrderName} >
                        <option disabled selected>Order by Name...</option>
                        <option value='Upward'>Upward</option>
                        <option value='Falling'>Falling</option>
                    </select>
                </div>
                {/* ordenar por poblacion */}
                <div>
                    <select onChange={handleOrderPop} >
                        <option disabled selected>Order by Population...</option>
                        <option value='Upward'>Upward</option>
                        <option value='Falling'>Falling</option>
                    </select>
                </div>
            </div>
			<div className={style.cards}>     
            {

            filteredCountries.slice(pages * 15 -15, pages * 15).map((count)=>{
                return <Card 
                key = {count.ID}
                ID = {count.ID}
                name = {count.name}
                flag = {count.flag}
                continent = {count.continent}
                activities = {count.Activities?.map((act)=>{return Object.values(act)})}
                
                />
            })
            }
			</div>
            {filteredCountries.length > 10 && <div className={style.pagination}>
                <button disabled={pages === 1} onClick={goPrevious}><img src={left}/></button>
                <span>Page: {pages}</span>
                {filteredCountries.length? <button disabled={pages === Math.ceil(filteredCountries.length/15)} onClick={goNext}><img src={right}/></button>:
                <button disabled={pages === Math.ceil(filteredCountries.length/15)} onClick={goNext}><img src={right}/></button>
                }
            </div> }
        </div>
    )
}



export default Cards;