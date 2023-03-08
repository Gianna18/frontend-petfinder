import { useState } from "react"
import axios from "axios"
import { useStore } from "zustand"
import { petsStore } from "../data/PetsStore"

function AddPet({user_id}){
    const pets = useStore(petsStore)
    const [showForm,setShowForm] = useState(false)
    const [newPet, setNewPet] = useState({
    "name":"",
    "breed": "", 
    "price": "",
    "user_id":user_id
    })
    //console.log(newPet)
    const handleSubmit = (e)  =>{
    e.preventDefault()
    setShowForm(false)
    console.log(newPet)
    axios.post(`https://jsonplaceholder.typicode.com/posts`,newPet).then((r) =>
    pets.setPetsStore([...pets.petsList, r.data])
);
    }

    if(showForm === false){
        return <button 
        onClick={() => setShowForm(true)
        } className="text-center text-blue-800 underline hover:text-red-800 ml-8 ">Add new pet</button>
    }else{
        return <form onSubmit={handleSubmit} className="weak">
        <input className="text-center" type="text" placeholder="Pet name" onChange={(e) =>{
        setNewPet({...newPet, "name":e.target.value})
        }}></input>
        <input className="text-center mt-1" type="text" placeholder="Pet breed" onChange={(e) =>{
        setNewPet({...newPet, "breed":e.target.value})
        }}></input>
        <input className="text-center mt-1" type="integer" placeholder="Pet price" onChange={(e) =>{
        setNewPet({...newPet, "price":e.target.value})
        }}></input>
        <button type="submit" className="
        border-2 m-2 bg-red-300 text-black  hover:border-black hover:text-white hover:bg-black" >Add</button>
        </form>
    }
    

}

// Import necessary dependencies and functions
// import React, { useState } from 'react';
// import { createUser } from './https://jsonplaceholder.typicode.com/posts';
// import './AddPet.css'; // Import the stylesheet

// // Create a component to render the add user form
// const AddPet = () => {
//   // Declare state for handling the form data and submit operation
//   const [formData, setFormData] = useState({ name: '', email: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Define a function to handle changes to the form data
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Define a function to handle the submit operation
//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior
//     try {
//       setIsSubmitting(true); // Set state to indicate that the submit operation is in progress
//       await createUser(formData); // Call the API function to create the user
//       setIsSubmitting(false); // Set state to indicate that the submit operation is complete
//       alert('User created successfully.'); // Show a success message to the user
//       setFormData({ name: '', email: '' }); // Clear the form data
//     } catch (error) {
//       setIsSubmitting(false); // Set state to indicate that the submit operation is complete
//       alert('Error creating user: ' + error.message); // Show an error message to the user
//     }
//   };

//   // Render the add user form
//   return (
//     <form className="add-user-form" onSubmit={handleSubmit}>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
//       </div>
//       <button className="submit-btn" type="submit" disabled={isSubmitting}>
//         {isSubmitting ? 'Creating...' : 'Create User'}
//       </button>
//     </form>
//   );
// };


export default AddPet;