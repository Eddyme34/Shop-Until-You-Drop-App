import React, {useState} from 'react'
import image from './discount.png'
import incomeRange from './IncomeRange'
import {Link, useLocation} from 'react-router-dom';



function Income(){
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const location = useLocation();
  
  function updateInput(){
    console.log("input val is "+inputValue);
    //document.getElementById("in").value = incomeRange;
  }
 

  console.log(inputValue);
    return(
      <div className="main">

        <h1 className="blueTitles" >  DISCOUNTS  </h1>

        <p className="description">
          Remember, tuition is only the sticker price - you may be eligible for a big discount!
        </p>

        <p className="description">
          Let's see if you qualify for any of the discounts.
        </p>

        <img className="roundImage" src={image}/>
        <h2>Family Income</h2>
        

          <div className="search-bar-dropdown">

          {/* START of the INPUT ELEMENT ____________________________________________________*/}

          <select className="incomeSelect" 
                  id="income"
                  onChange={(e) => {setInputValue(document.getElementById("income").value);
                  //updateInput();  
                    }}>
            <option value="" disabled selected className="opts">Select your Income Range</option>
            <option value="$ 0-30000" className="opts" >$ 0-30000</option>
            <option value="$ 30001-48000" className="opts">$ 30001-48000</option>
            <option value="$ 48001-75000" className="opts">$ 48001-75000</option>
            <option value="$ 75001-111000" className="opts">$ 75001-111000</option>
            <option value="$ 110001-plus" className="opts">$ 110001-plus</option>
          </select>



          {/*
          <input type='text' className="UniInput" id="in" 

          //change inputValue and suggestions list when we input
          onChange= { (event) => {
            //set inputValue 
            setInputValue(event.target.value);

            //creating a dummy list, this would be a list of uni names
            //this creates the suggestion lists, .filter  does some magic and compares each item in list with inputVal
            setSuggestions(incomeRange.filter((incomeRange) => incomeRange.includes(inputValue)))

          
          } }/>  
          {/* END of the INPUT ELEMENT ________________________________________________________*/}


          {/*  idk what exactly .map do but it helps us print the list? */}
          {/*}
          {suggestions.map((incomeRange, index) => {
            return (
              <button 
                type="button"  
                key={index}  
                onClick={(e) => {setInputValue(incomeRange); 
                updateInput(incomeRange)} }

                className="uniDropdown" 
              >

                  { incomeRange }    {/*  idk how but this prints out the suggestion list 

              </button>
            );
          })}

          */} 
        </div>
      <Link          
          to={incomeRange.includes(inputValue) ?{
            pathname: "/total",
            state: {
              selected: inputValue,
              inp: location.state.inp,
              tuition: location.state.tuition,
              total: location.state.total,
              low: location.state.low,
              medium: location.state.medium,
              hMedium: location.state.hMedium,
              high: location.state.high,
              top: location.state.top,
              city: location.state.city,
              state: location.state.state
            },
          } : {
            pathname: "/income",
            state: {
              selected: inputValue,
              inp: location.state.inp,
              tuition: location.state.tuition,
              total: location.state.total,
              low: location.state.low,
              medium: location.state.medium,
              hMedium: location.state.hMedium,
              high: location.state.high,
              top: location.state.top,
              city: location.state.city,
              state: location.state.state
            },}}>
        <button className ="Btn" id="orange">GO</button>
      </Link>
      </div>

    )
  }

export default Income;