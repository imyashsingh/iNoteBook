import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [credentials,setCredentials] = useState({name : "",email : "",password : "",cpassword : ""});
    let navigate = useNavigate();  
    const handleSubmit = async(event)=>{
      event.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
          body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password}),
        });
        const json = await response.json();
        if(json.success){
          localStorage.setItem('token',json.authtoken);
          console.log(json);
          navigate("/");
        }
        else{
          alert("Invalid Credentials");
        }
  
    }
  
    const onChange = (event)=>{
      setCredentials({...credentials,[event.target.name]: event.target.value})
  
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className="form-group my-2">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" name='name' onChange={onChange} placeholder="Enter Name" required/>
            </div>
            <div className="form-group my-2">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" onChange={onChange} placeholder="Enter email" required/>
            </div>
            <div className="form-group my-2">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" name='password' onChange={onChange} placeholder="Password" minLength={3} required/>
            </div>
            <div className="form-group my-2">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="password" className="form-control" id="cpassword" name='cpassword' onChange={onChange} placeholder="confirm Password" minLength={3} required/>
            </div>
            <button disabled={credentials.password.length < 4 || credentials.password!==credentials.cpassword} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Signup;