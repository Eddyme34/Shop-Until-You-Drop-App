import React, {Component} from 'react';
import { useState } from 'react';
import {useForm} from 'react';
import {useEffect} from 'react';
import Fetching from '../useAsyncFetch';
import Price from './Price';
import {Link} from 'react-router-dom';
import image from './shoppingcart.png'
import university from './schoolList';

function updateInput(university){
  document.getElementById("in").value = university;
}
class Shop extends React.Component{
  constructor(props) {
    super(props);  //does some magic idk 

    this.state = {
      inputValue: '',
      added: false,
      suggestions: []   //this will hold the list of uni names
    };

    this.updateUniName = this.updateUniName.bind(this);
    this.handleAdded = this.handleAdded.bind(this);

    this.updateSuggestions = this.updateSuggestions.bind(this);
  }
  

  //onChange={event => this.updateUniName(event) }     value={this.state.uniName} 
    handleAdded(){
      this.setState({
        added: true
      });
    }
    updateUniName(event) {
      this.setState({
        inputValue: event.target.value
      });
    }


    //was trying to use this function just to update the suggestion list having trouble wit it
    updateSuggestions(){     
      const options = [];
      for (let i = 0; i < 10; i++) {
        options.push(`option ${i}`);
        options.push(`suggesstion ${i}`);
        options.push(`advice ${i}`);
      }

        this.setState({
          suggestions: options.filter((option) => option.includes(this.state.inputValue))
        }
      )
    } 

 
  render(){
    console.log(this.state.inputValue);

    return(
      <div className="main">

        <h1 className="blueTitles" >  SHOP 'TIL YOU DROP  </h1>

        <p className="description">
          Tuition is only the sticker price - you might be    eligible for a big discount! Estimate the (make this italics) -> real costs of college, for schools across the country.
        </p>
        
        <img className="roundImage" src={image}/>
        <h2>Start typing to pick a school</h2>
        
        <div className="search-bar-dropdown">

          {/* START of the INPUT ELEMENT ____________________________________________________*/}
          <input type='text' className="UniInput" id="in" 

          //change inputValue and suggestions list when we input
          onChange= { (event) => {
            //set inputValue 
            this.setState({ inputValue: event.target.value });

            //this creates the suggestion lists, .filter  does some magic and compares each item in list with inputVal
            this.setState({
                suggestions: university.filter((university) => university.includes(this.state.inputValue))
            })

          
          } }/>  
          {/* END of the INPUT ELEMENT ________________________________________________________*/}


          {/*  idk what exactly .map do but it helps us print the list? */}
          {this.state.suggestions.map((university, index) => {
            return (
              <button 
                type="button"  
                key={index}  
                onClick={(e) => {   
                  this.setState( { inputValue: university} ); 
                  updateInput(university);
                  this.setState({suggestions: [] })                  
                  }}

                className="uniDropdown" 
              >

                  { university }    {/*  idk how but this prints out the suggestion list */}

              </button>
            );
          })}




        </div>
        <Link
          to={university.includes(this.state.inputValue)?{
            pathname: "/price",
            state: {
              inp: this.state.inputValue,
            },
          }: {
            pathname: "/",
            state: {
              inp: this.state.inputValue,
            },}}
        >
          <button className ="Btn" id="orange">ADD TO CART</button>
        </Link>

      </div>
    )
  };


}

export default Shop;
