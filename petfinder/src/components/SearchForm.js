import React from "react";
import axios from "axios";
import { useStore } from "zustand";
import { petsStore } from "../data/PetsStore";
import { NativeSelect, FormControl } from '@material-ui/core';

function SearchForm(){
const pets = useStore(petsStore)
const handleSearch = (e) => {
    console.log(e.target.value)
axios.post('https://wamae-pet-finder.onrender.com/pets/search_all',{
    query: e.target.value
}).then( (r) =>
    pets.setPetsStore(r.data)
)
} 
return (
     <React.Fragment>
        <div className="petForm">
          <h1>PETFORM</h1>
          <div className="petListData__input">
    
          
             
          <FormControl className="formControl">
          <input onChange={handleSearch} placeholder="Search Pet Name"/>
          <NativeSelect defaultValue="" onChange={(e) => handleSearch(e.target.value)}>
            {/* default is PetFinder */}
          <option value="">PetFinder</option>
            
          </NativeSelect>
          
        </FormControl>
    
            
          </div>
      
          {/* Showing the details of the pet */}
          {/* <div className="petListData__info">
            <p>Name : {name}</p>
      
            <p>Breed : {breed}</p>
      
            <p>Price : {price}</p>
      
          </div> */}
        </div>
        
       
      </React.Fragment> 
      );
    }

export default SearchForm