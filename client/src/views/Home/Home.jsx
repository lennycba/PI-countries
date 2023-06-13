import React from 'react'
import Cards from '../../components/Cards/Cards';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {getActivities,getContinents} from '../../redux/actions';


function Home() {
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getActivities())
    dispatch(getContinents())
  },[dispatch])

  return (
    <div>
      <Cards />
    </div>
  )
}

export default Home