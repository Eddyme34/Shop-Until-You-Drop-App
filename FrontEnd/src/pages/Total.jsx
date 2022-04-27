import React from 'react';
import image from './receipt.png'
import { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

function Total(){

  //const [uni, setUni] = useState('Stanford');
  const location = useLocation();
  let uni = location.state.inp;
  let uniLocation = location.state.city + ", " + location.state.state;
  let tuition = location.state.tuition;  
  let expenses = location.state.total - location.state.tuition;
  let subtotal = location.state.total;
  let discount = 0;
  console.log(location.state.high);
  if(location.state.selected === "$ 0-30000" && location.state.low !== null){
    discount = location.state.low;
  }
  else if(location.state.selected === "$ 30001-48000" && location.state.medium !== null){
    discount = location.state.medium;
  }
  else if(location.state.selected === "$ 48001-75000" && location.state.hMedium !== null){
    discount = location.state.hMedium;
  }
  else if(location.state.selected === "$ 75001-110000" && location.state.high !== null){
    discount = location.state.high;
  }
  else if(location.state.selected === "$ 110001-plus" && location.state.top !== null){
    discount = location.state.top;
  }
  
  let total = subtotal-discount;
  
  
 
  return(
    
    <div  className="main">
      <h1 className="blueTitles" >  TOTAL </h1>

      <div className="recieptContainer">
        
        { /*  <img className="reciept" src={image}/> */ }
        <div className="contentTotal">

          <div className="Uniheading">  
            <h2 className="uniInfo" id="uniName" >{uni}</h2>
            <h2 className="uniInfo"> {uniLocation} </h2>
          </div>

          <div className="DescriptionHeading">
            <h3 className="descheading">    QTY    </h3>
            <h3  className="descheading" id="descriptionColumn" >  DESCRIPTION  </h3>
            <h3 className="descheading">      AMOUNT     </h3>
          </div>

          <div className="Description">

            <div className="row">
              <h3 className="tuitionRow"> 1 </h3>
              <h3 className="tuitionRow"   id="tutu"> TUITION </h3>
              <h3 className="tuitionRow"> ${tuition} </h3>            
            </div>

            <div className="row">
              <h3 className="tuitionRow"> 1 </h3>
              <h3 className="tuitionRow"   id="expense"> FEES, SUPPLIES AND LIVING EXPENSES </h3>
              <h3 className="tuitionRow"> ${expenses} </h3>  
            </div>

            <div className="row">
              <h3 className="subtotal" id="sbr"> SUBTOTAL</h3>
              <h3 className="subtotal"> ${subtotal}  </h3>
            </div>
          </div>

          <div className="discountNtotal">
            <div className="row">
                <h2 id="discount">DISCOUNT</h2>
                <h2>-${discount}</h2>
            </div>

            <div className="row" >
                <h2  className="totalRow" id="total">TOTAL</h2>
                <h2 className="totalRow">${total}*</h2>
            </div>  
          
          </div>
          
          <div className="disclaimer">
                 <h2>*</h2>
                 <div className="disclaimerNote">
                  <p className="note">This estimate is based on actual costs for families that recieved federal aid or loans by applying with the FAFSA form. It always pays to ask for a discount!</p>

                  <p className="note">Cost includes tuition, living costs, books and supplies, and fees minus the average grants and scholarships for federal financial aid recipients.</p>

                  <p className="note">Depending on the federal, state, or institutional grand aid available, students in your income bracket may pay more or less than the overall average costs.</p>
                 </div>
          </div>

        </div>


        


      </div>
      <Link to="/">
        <button className ="Btn" id="orange">START OVER</button>   
      </Link> 
    </div>
  )
}

export default Total;