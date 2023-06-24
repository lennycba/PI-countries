import React from 'react';
import style from './SearchBar.module.css';
import {useEffect,useState} from 'react';
import {useDispatch} from 'react-redux';
import {searchByName} from '../../redux/actions';

const SearchBar = () => {

  const dispatch = useDispatch();
  const [search,setSearch] = useState('')

  
  const handleSearch = (e) =>{
    e.preventDefault()
    setSearch(e.target.value)
  }
  
  useEffect(()=>{
    if(search.length>0){
      dispatch(searchByName(search))
    }
  },[search])

  return (
    <div className={style.searchContainer} >
      <div>
        <label className={style.label} >Here you can search Countries...</label>
      </div>
      <div>
        <input type ='text' placeholder='Search Country by name' onChange={handleSearch} />
      </div>
    </div>
  )
}

export default SearchBar