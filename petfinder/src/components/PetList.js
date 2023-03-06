import React, { useEffect, useState } from "react";


function PetList({handlePetChange}) {
    const [pets, setPets] = useState([]);
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [breed, setBreed] = useState("");
    const [price, setPrice] = useState("");
    const [userInput, setUserInput] = useState("");

 
     //fetches all pet and user data
  useEffect(() => {
    fetch("http://localhost:9292/pets")
      .then(response => response.json())
      .then(data=>setPets(data)) 
        setPets(pets);

     fetch("http://localhost:9292/users")
      .then(response => response.json())
      .then(data=>setUsers(data)) 
       setUsers(users);
      },[]);

      const petArrayName=pets.map((pet)=>{
        return <h2>{pet.name}</h2>
       })
      const userArrayName=users.map((user)=>{
        return <h2>{user.text}</h2>
      })
      

      return (
        <div className= "PetList">
          <h1>Pets in the store</h1>
          {petArrayName}

          <h1>Users</h1>
          {userArrayName}
        </div>
      );

    
}
  
export default PetList;
