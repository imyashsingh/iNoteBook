import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import alertContext from '../context/alerts/alertContest';

const Login = () => {

  const [credentials,setCredentials] = useState({email : "",password : ""});
  const {showAlert} = useContext(alertContext);
  let navigate = useNavigate();  
  const handleSubmit = async(event)=>{
    event.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          },
        body: JSON.stringify({email:credentials.email,password:credentials.password}),
      });
      const json = await response.json();
      if(json.success){
        localStorage.setItem('token',json.authtoken);
        navigate("/");
        showAlert("Logged in Successfully ","success");
      }
      else{
        showAlert("Invalid Details","danger");
      }

  }

  const onChange = (event)=>{
    setCredentials({...credentials,[event.target.name]: event.target.value})

  }
    
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group my-3">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter email"/>
            </div>
            <div className="form-group my-3">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name="password" onChange={onChange} placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Login;