import React, { useEffect, useState } from "react";


function PetList({handlePetChange}) {
    const [pets, setPets] = useState([]);
    const [users, setUsers] = useState([]);
    

  //fetches all pet and user data
  useEffect(() => {
    fetch("http://localhost:9292/pets")
      .then(response => response.json())
      .then(data=>setPets(data)) 
        setPets(pets);

     },[]);

      const petArrayName=pets.map((pet)=>{
        return <h2>{pet.name}</h2>
       })
     
      

      return (
        <div className= "PetList">
          <h1>Pets in the store</h1>
        <h1>PETS</h1>
          <div className ="container">
        <div className='number 1'>
          <h2>Dom</h2>
          
        <img src = "/images/images/alvan-nee-eoqnr8ikwFE-unsplash.jpg" />
        <button>DELETE</button>
        </div>
        <div className = "number 2">
         <h2>Brian</h2>
          <img src="/images/images/bulldog-ge7f461506_1920.jpg"/>
        <button>DELETE</button>
        </div>
        <div className= "number 3">
          <h2>Mia</h2>
          <img src ="/images/images/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg" />
          <button>DELETE</button>
        </div>
        <div className='number 4'>
          <h2>Han</h2>
          <img src = "/images/images/dachshund-g5da46ee69_1920.jpg"/>
          <button>DELETE</button>
        </div>
        <div className='number 5'>
          <h2>Roman</h2>
          <img src = "/images/images/lucas-ludwig-CMnikGdcIjo-unsplash.jpg"/>
          <button>DELETE</button>
        </div>
        <div className='number 6'>
          <h2>Tez</h2>
          <img src = "/images/images/cat-g73cd6b7c2_1920.jpg"/>
          <button>DELETE</button>
        </div>
        <div className='number 7'>
          <h2>Hobbs</h2>
          <img src = "/images/images/alvan-nee-ZCHj_2lJP00-unsplash.jpg"/>
          <button>DELETE</button>
        </div>

      </div>
      {petArrayName}
      </div>
      
          

         
       
      );

    
}
  
export default PetList;
