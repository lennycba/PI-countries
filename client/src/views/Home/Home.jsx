import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Cards from '../../components/Cards/Cards';
import { getActivities } from '../../redux/actions';
import style from './Home.module.css'



function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getActivities());
  },[])
  return (
    <div className={style.cont}>
      <Cards />
    </div>
  )
}

export default Home