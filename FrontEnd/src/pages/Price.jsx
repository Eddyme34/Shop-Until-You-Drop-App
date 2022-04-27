import React , { useState } from 'react'
import image from './pricetag.png'
import {Link, useLocation} from 'react-router-dom';
import useAsyncFetch from '../useAsyncFetch';

function Price(){
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const input = location.state.inp;
  useAsyncFetch("query?key=BZacuXZnENzSYeVWjDoAHxi7cMpEilN4U8BtvRP0&university="+input,  {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    }, thenFun, catchFun);
  

  function thenFun (result) {
    setMovies(result.results[0]);
    console.log(result.results[0]['2018.cost.tuition.in_state'])
  }

  function catchFun (error) {
    console.log(error);
  }
  return(
  <div class="main">
    <h1 class="blueTitles" >  PRICE </h1>

    <div className="priceTagContainer">

      <div className="prices">
        
          <h2 className="priceHeading">SCHOOL</h2>
        
          <h1 className="schoolName">{input}</h1>
          <h1 className="schoolName" id="loc">{movies["school.city"] + "," + movies["school.state"]}</h1>
         
          <h2 className="priceHeading"> TUITION </h2> 

        <h2 className="fees">${movies['2018.cost.tuition.in_state'] !== null ? movies['2018.cost.tuition.in_state']: "N/A"}</h2>

          <h2 className="priceHeading"> ROOM AND BOARD, FEES, SUPPLIES </h2> 

        <h2 className="fees">${movies["2018.cost.attendance.academic_year"] - movies['2018.cost.tuition.in_state']}</h2>

        <div className="totalContainer">
        <h2 className="fees" id="totalHaeading">TOTAL RETAIL PRICE**</h2>
        <h1 className="totalPrice">${movies["2018.cost.attendance.academic_year"] !== null ? movies["2018.cost.attendance.academic_year"]: "N/A"}</h1>

        </div>
      </div>
      
    </div>
  
  
    <h3>YOU MAY BE ELIGIBLE FOR A DISCOUNT!</h3>
    
      <Link
          to={{
            pathname: "/income",
            state: {
              inp: input,
              tuition: movies['2018.cost.tuition.in_state'] !== null ? movies['2018.cost.tuition.in_state']: 0,
              total: movies["2018.cost.attendance.academic_year"] !== null ? movies["2018.cost.attendance.academic_year"]: 0,
              low: movies["2018.cost.net_price.consumer.by_income_level.0-30000"],
              medium: movies["2018.cost.net_price.consumer.by_income_level.30001-48000"],
              hMedium: movies["2018.cost.net_price.consumer.by_income_level.48001-75000"],
              high: movies["2018.cost.net_price.consumer.by_income_level.750001-111000"],
              top: movies["2018.cost.net_price.consumer.by_income_level.110001-plus"],
              city: movies["school.city"],
              state: movies["school.state"]
            },
          }}
        >
      <button class ="Btn" id="green">SHOP FOR DISCOUNTS</button>
    </Link>
</div>

  )
}


export default Price;
