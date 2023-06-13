import Card from "../Card/Card";
import style from './Cards.module.css';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import {filterByContinent,orderByName,orderByPop,filterByActivities} from '../../redux/actions';

const Cards = () => {
    const countries = useSelector((state)=>state.countries)
    const filteredCountries = useSelector((state) => state.filteredCountries)
    const activities = useSelector((state)=> state.activities)
    const continents = useSelector((state)=> state.continents)
    const [selectedContinent, setSelectedContinent] = useState('')
    const [selectedActivity, setSelectedActivity] = useState('')
    const [orderName,setOrderName] = useState('')
    const [orderPop,setOrderPop] = useState('')
    const dispatch = useDispatch();
    

    //filtrar por continente ------------------------------------------------------------
    useEffect(()=>{
        dispatch(filterByContinent(selectedContinent))   
    },[selectedContinent]);

    function handleChangeCont(e){
        const value = e.target.value;
        setSelectedContinent(value)  
    }
    //----------------------------------------------------------------------

    //filtrar por actividad ------------------------------------------------------------
    useEffect(()=>{
        dispatch(filterByActivities(selectedActivity))
    },[selectedActivity]);

    function handleChangeAct(e){
        const value = e.target.value;
        setSelectedActivity(value);
    }
    //----------------------------------------------------------------------

    //ordenar por nombre------------------------------------------------------------

    function handleOrderName(e){
        const value = e.target.value;
        setOrderName(value)
    }
    
    useEffect(()=>{
        dispatch(orderByName(orderName))
    },[orderName])

    //----------------------------------------------------------------------
    //ordenar por poblacion------------------------------------------------------------

    function handleOrderPop(e){
        const value = e.target.value;
        setOrderPop(value)
    }
    
    useEffect(()=>{
        dispatch(orderByPop(orderPop))
    },[orderPop])

    //----------------------------------------------------------------------

    


    return (
        <div className={style.cardsContainer} >
            <div className={style.filtersAndOrders} >

            {/* filtro por continente */}
            <div className={style.fContinent} >
            <label>Filter By Continent: </label>
            <select onChange={handleChangeCont} > 
                <option value="All">All</option>
                {continents?.map((continent,index) => <option key={index} value={continent}>{continent}</option>)}
            </select>
            </div>
            {/* filtro por actividad */}
            <div className={style.fContinent} >
            <label>Filter By Activity: </label>
            <select onChange={handleChangeAct} > 
                <option value="">Select</option>
                <option value="All">All</option>
                {activities?.map((act,index) => <option key={index} value={act.name}>{act.name}</option>)}
            </select>
            </div>
                {/* ordenar por nombre */}
                <div>
                    <label>Order By Name: </label>
                    <select onChange={handleOrderName} >
                        <option value=''>Select</option>
                        <option value='Upward'>Upward</option>
                        <option value='Falling'>Falling</option>
                    </select>
                </div>
                {/* ordenar por poblacion */}
                <div>
                    <label>Order By Population: </label>
                    <select onChange={handleOrderPop} >
                        <option value=''>Select</option>
                        <option value='Upward'>Upward</option>
                        <option value='Falling'>Falling</option>
                    </select>
                </div>
            </div>
			<div className={style.cards}>     
            {
                filteredCountries?.length?
            filteredCountries?.map((count)=>{
                return <Card 
                key = {count.ID}
                name = {count.name}
                flag = {count.flag}
                continent = {count.continent}
                activities = {count.Activities?.map((act)=>{return Object.values(act)})}
                
                />
            }):
            countries?.map((count)=>{
                return <Card 
                key = {count.ID}
                name = {count.name}
                flag = {count.flag}
                continent = {count.continent}
                activities = {count.Activities?.map((act)=>{return Object.values(act)})}
                />
            })}
			</div>
        </div>
    )
}



export default Cards;