import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'
import Services from '../../components/Services/Services'
import Presentation from '../../components/Presentation/Presentation'
import Milkshake from '../../components/Milkshake/Milkshake'

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      
    <Presentation/>
        <Header/>
        <Services/>
        <Milkshake/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        
         <AppDownload/>
    </div>
  )
}

export default Home