import {Tempcontext} from './LogContext'

import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
export const Login = () => {
  //  use reqres to log user in.
  const [data,setData]=useState([])
  
  useEffect(()=>{
    emp()
  },[])
  	async function emp() {
		let res = await fetch('http://localhost:8080/employee');
		let data = await res.json();
		setData(data);
	}
  
  const [user,setUser]=useState({})
  const nav = useNavigate()
  const { isAuth, toggleAuth } = useContext(Tempcontext)
  function sendToken(e) { 
    e.preventDefault()
    let a=false
    data.map((e)=>{
      if(e.username==user.username || e.password==user.password){
        toggleAuth();
		    nav(-2, { replace: true });  
        a=true
      }
    })
    if(a){
      return 
    }else{
      alert('wrong email or password');
    }
    
  }
  const handelchange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
  };


  return (
		<form className="loginform" onSubmit={sendToken}>
			<input
				name="username"
				type="text"
				placeholder="Enter username"
				className="login_username"
				onChange={handelchange}
			/>
			<input
				name="password"
				type="text"
				placeholder="Enter password"
				className="login_password"
				onChange={handelchange}
			/>
			<input type="submit" value="SIGN IN" className="login_submit" />
		</form>
  );
};
