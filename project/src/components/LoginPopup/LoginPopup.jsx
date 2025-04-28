import React, { useContext, useEffect, useRef, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'


const LoginPopup = ({setShowLogin}) => { 
    const {url}=useContext(StoreContext);
    const {setToken}=useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");
    const [data,setData]=useState({
      name:"",
      email:"",
      password:"",
    })
    
     const onchangeHandler=(event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setData(data=>({...data,[name]:value}))
     }

       const onLogin=async(event)=>{
         event.preventDefault();
         let newUrl=url;
         if (currState==="Login"){
          newUrl ="http://localhost:4000/api/user/login";

         }
         else {
          newUrl="http://localhost:4000/api/user/register"
         }
         const response=await axios.post(newUrl,data);
         if (response.data.success){
           setToken(response.data.token);
           localStorage.setItem("token",response.data.token);
           setShowLogin(false);
         }
         else{
           alert(response.message)
         }
       }
       const popupRef = useRef();
  // 💡 Fermer le popup en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowLogin(false);
      }
    };

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setShowLogin(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [setShowLogin]);

   useEffect(()=>{
    console.log(data);
   },[data])

  return (
    <div className='login-popup'>
    <form onSubmit={onLogin} ref={popupRef} className='login-popup-container'>
    <div className='login-popup-title'>
     <h2>
      {currState}
     </h2>
     <img src={assets.cross_icon} alt="" 
     onClick={()=>setShowLogin(false)}/>
    </div>
    <div className='login-popup-inputs'>
    {currState==='Login'?<></>:<input name='name' 
    onChange={onchangeHandler} value={data.name}
    type="text" placeholder="Your name" required/>}
     
     <input name='email' onChange={onchangeHandler} type="email" 
     placeholder="Email" value={data.email} required/>
     <input name='password' onChange={onchangeHandler} type="password" 
     placeholder='Password' value={data.password} required/>
    
    </div>
    <button type="submit">{currState==='Sign Up'?'Create account':"Login"}</button>
   { currState==='Sign Up' ?<div className='login-popup-condition'>
     <input type="checkbox" required/>
     <p>By continuing, i agree to the terms of use & privacy policy.</p>

    </div>:<></>}
    {currState==='Login'?
    <p>
        Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span>
    </p>: <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>}
    
   
    </form>
    </div>
  )
}

export default LoginPopup