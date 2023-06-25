import React from 'react';
import style from './SearchBar.module.css';
import {useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {searchByName} from '../../redux/actions';

const SearchBar = () => {

  const backMessages = useSelector((state)=> state.backMessages)
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
      {backMessages.message? <span className={style.errorMessage}>{backMessages.message}</span>:null}
    </div>
  )
}

export default SearchBar