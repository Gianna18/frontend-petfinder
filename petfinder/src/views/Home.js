import React from "react";

function Home() {
    return (
       <div className="Home">
        <h1>WELCOME TO THE PETFINDER</h1>
          <h2>HELLO THERE, ARE YOU LOOKING FOR A NEW PET?</h2>
          <h4>For the newbies, SignUp and for the OGs just login</h4>
      <div className ="container">
        <div className='first'>
        <img src = "/images/images/andrew-s-ouo1hbizWwo-unsplash.jpg" />
        </div>
        <div className = 'second'>
         
          <img src="images/images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg"/>
        </div>
        <div className='third'>
          <img src ="/images/images/tran-mau-tri-tam--81lVsfM4gQ-unsplash.jpg" />
        </div>
        <div className='fourth'>
          {/* <h3>Take the Following Steps to Self-Protect</h3> */}
          {/* <img src = "images/prevention.png" /> */}
          <img src = "/images/images/tran-mau-tri-tam-7QjU_u2vGDs-unsplash.jpg"/>
        </div>
      </div>
       </div>
    )
}

export default Home;