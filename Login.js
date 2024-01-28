import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import Home from './Home'
function Login()
{
    const[username,setUsername]=useState(" ");
    const[phoneno,setPhoneno]=useState(" ");
    const[nameerror,setNameerror]=useState(false);
    const[phoneerror,setPhoneerror]=useState(false);
    const navigate=useNavigate();
    function submitHandler(e)
    {
        e.preventDefault();
        alert("Submitted");
        navigate("/home");
    }
    function userhandler(e)
    {
        setUsername(e.target.value);
        let pattern =new RegExp("^[A-Za-z]+$");
        if(username.length<5)
        {
            setNameerror(true);
        }
        else
        {
            setNameerror(false);
        }
        if(!pattern.test(username))
        {
            setNameerror(true);
        }
        else
        {
            setNameerror(false);
        }

    }
    function Phonehandler(e)
    {
        setPhoneno(e.target.value);
        let pattern =new RegExp("^.{10}$");
        if(phoneno.length>10)
        {
            setPhoneerror(true);
        }
        else
        {
            setPhoneerror(false);
        }
        if(!pattern.test(username))
        {
            setPhoneerror(true);
        }
        else
        {
            setPhoneerror(false);
        }

    }

 return(
    <div>
         <header>
            Login
            </header>
            <div className="forms">
                <form>
                    <label>
                        Name:
                        <br/>
                        <input type="text" name="username" pattern="^[A-Za-z]+$" onChange={userhandler} />{nameerror?<span>Invalid Name</span>:null}
                    </label>
                    <label>
                        PhoneNo:
                        <br/>
                        <input type="text" name="phoneno" pattern="^\d{10}$" onChange={Phonehandler} />{phoneerror?<span>Invalid PhoneNo</span>:null}
                    </label>
                    <button type="submit" onClick={submitHandler}>Submit</button>
                 </form>  
                  
            </div>
            
    </div>
 );
}
export default Login;

<h1><Home username="username"/></h1>