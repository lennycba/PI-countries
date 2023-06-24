import React from 'react'
import Cards from '../../components/Cards/Cards';
import style from './Home.module.css'



function Home() {

  return (
    <div className={style.cont}>
      <Cards />
    </div>
  )
}

export default Home