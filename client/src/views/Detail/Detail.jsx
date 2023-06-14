import React from 'react';
import {useEffect} from 'react';
import DetailCard from '../../components/DetailCard/DetailCard'
import { useDispatch, useSelector } from 'react-redux';
import {getCountryById} from '../../redux/actions';
import {useParams} from 'react-router-dom';

function Detail() {
    const detailCountry = useSelector((state)=> state.detailCountry)
    const listActivities = detailCountry.Activities?.map((e)=> e.name)
    console.log(listActivities)
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(()=>{
   dispatch(getCountryById(id))
   return () => {
    dispatch(getCountryById(''))
   }
  },[dispatch])

  return (
    <div>
      <DetailCard 
      name={detailCountry?.name}
      continent={detailCountry?.continent}
      flag={detailCountry?.flag}
      id={detailCountry?.ID}
      activities={listActivities}
      capital={detailCountry?.capital}
      population={detailCountry?.population}
      subRegion={detailCountry?.subregion}
      area={detailCountry?.area}
      />
    </div>
  )
}

export default Detail