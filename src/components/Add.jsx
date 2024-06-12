
import React, { useState } from 'react'

const Add = () => {
  const[data,setData]=useState(
    {
      "name":"",
      "password":""
    }
  )
  const inputHandler=(event)=>{
    setData({...data,[event.target.name]:event.target.value})
  }

  const readValue=()=>{
    console.log(data)
  }

   
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="card" >
  <img src="https://media.istockphoto.com/id/1064136992/photo/soccer-player-jogging-and-jump-between-cone-markers-on-green-artificial-turf-for-soccer.jpg?s=612x612&w=0&k=20&c=aRoYEipAvM7OiSiZ0XdktCb0BW8l-OgBvucGsFEcK5s=" height="250px" class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">TURF-BOOKING</h5>
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <label htmlFor="" className="form-label">NAME</label>
    <input type="text" className="form control" name='name' value={data.name} onChange={inputHandler}/></div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
    <label htmlFor="" className="form-label">PASSWORD</label>
    <input type="password" className="form control" name='password' value={data.password} onChange={inputHandler}/>
    </div>
    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
      <button class="btn btn-primary">LOGIN</button>
    </div>
<h3>DIDN'T SIGNUP YET?</h3>
    <a href="#" class="btn btn-primary" onClick={readValue}>SIGN-UP</a>
  </div>
</div>
</div></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add