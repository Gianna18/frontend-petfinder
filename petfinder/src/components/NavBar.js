import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div className="nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="./signup">SignUp</NavLink>
            <NavLink to="./login">LogIn</NavLink>
            <NavLink to="./petlist">PetList</NavLink>
            <NavLink to="./addpet">AddPet</NavLink>
            <NavLink to="./searchform">SearchForm</NavLink>
            
            
            <NavLink to="./logout">LogOut</NavLink>
            

        </div>
    )
}

export default NavBar;