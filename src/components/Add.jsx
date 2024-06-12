import React, { useState } from 'react';
import {  Link } from 'react-router-dom';



const Add = () => {
    const[data,setData]=useState(
        {
            "username":"",
            "password":""
        }
    
        
    )
    const inputHandler= (event)=>{
        setData({...data,[event.target.name]: event.target.value})
    }

    const readValue=()=>{
        console.log(data)
       
    }
    return (
        <div>
            
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="card" >
                                    <img src="https://media.istockphoto.com/id/511620103/photo/kids-soccer-blur.jpg?s=612x612&w=0&k=20&c=CGEXJqJxiv6PF5_bn4WD2C4tmoplC9ldzTp-vfKDveQ=" height="250px" class="card-img-top" alt="..."></img>
                                        <div class="card-body">
                                            <h5 class="card-title">USER APP</h5>
                                           
                                        </div>
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <label htmlFor="" className="form-label">USERNAME</label>
                                                    <input type="text" className="form-control" name='username' value={data.username} onChange={inputHandler}/>
                                                </div>
                                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                                    <label htmlFor="" className="form-label">PASSWORD</label>
                                                    <input type="text" className="form-control" name='password' value={data.password} onChange={inputHandler}/>
                                                </div>
                                                
                                            </div>
                                        </div>
                                        <div class="card-body">
                                          <Link to="/" class="card-link">LOGIN</Link>
                                           <Link to="/SignUp" class="card-link" onClick={readValue}>SIGN-UP</Link>
                                          
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            );
}

            export default Add;
