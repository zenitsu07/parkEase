import React, {useState, useEffect} from 'react';
import Nav from './Nav'
import axios from 'axios';
import {getUser} from './helpers';

const App= () => {


return (
    <div style={{backgroundColor:"#1f2937"}}>    

    <div class="header" >
    <div class="container" >   
    
        <h3>PARKING MANAGEMENT SYSTEM</h3>
        
    </div>
    </div> 
    <div class="logo wow fadeInDown animated" data-wow-delay=".5s">
    
        <Nav />
    </div>
    <br /><br />
    <div className="col-md-4 " style={{backgroundColor: "#1f2937", margin :20}} >
            <img src="../parking3.jpg" class="img"  style={{ marginLeft: 76 , height: 450,  width: 1000}} />
        </div>
    {/* <div className="row"> */}
    
        
        {/* <div className="col-md-4 col-sm-4" >
            <h4 class="para">MYPARKING MANAGEMENT SYSTEM</h4>
        <p class="para" style={{textAlign: 'justify'}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in the 1960s 
            with the release of Letraset sheets containing Lorem Ipsum passages, and more 
            recently with desktop publishing software like Aldus PageMaker including versions
            of Lorem Ipsum.
        </p>
    </div> */}
    
{/* </div>   */}
    <br />
    <div className="row" style={{ margin:20, marginLeft: 40, }}>
        <div className='card' style={{marginRight:50, marginLeft: 70}}>
        <h6>Employee Name:<br /> Lorem Singh</h6>
            Age: 26<br />
            Timings: 8:00-20:00
        </div>
        <div className='card'   style={{marginRight:50}}>
        <h6>Employee Name:<br /> Lorem Singh</h6>
            Age: 29<br />
            Timings: 8:00-20:00
        </div>
        <div className='card' style={{marginRight:50}}>
        <h6>Employee Name:<br /> Lorem Singh</h6>
            Age: 34<br />
            Timings: 20:00-8:00
        </div>
        <div className='card' style={{marginRight:50}}>
        <h6>Employee Name:<br /> Lorem Singh</h6>
            Age: 30<br />
            Timings: 20:00-8:00
        </div>
    </div>
        <br/>
        {/* <div class="footer">
        <p>© Copyright 2020-21</p>
        </div> */}
    </div>
);

};


export default App;
