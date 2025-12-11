import React,{ useState} from "react";

export default function Form (){
 const [firstname, setFirstname]=useState("");
 const [lastname, setLastname]=useState("")    
 const [fullname, setFullname]=useState("")
 const [show, setShow]=useState(false);

//const specialCharRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/;
//const hasDigit = /\d/;
const Regex=/^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$/
//this function will handle the form submission
const handleSubmit=(e)=>{
      e.preventDefault();
      if (!(firstname==="" && lastname==="")) {
         setShow(true)}
  if(((Regex.test(firstname)) && Regex.test(lastname))) { 
         setFullname(`${firstname} ${lastname}`);}
      else{
         setShow(false)
        console.error("Names can not have number or special symbols!")         
      }
      }

   return( 
   <>
   <form style={{fontFamily:"-apple-system"}} onSubmit={handleSubmit}>
   <h1 style={{fontFamily:"-apple-system"}}>Full Name Display</h1>

   First Name: <input type="text" 
   placeholder="Enter First_name"
   onChange={(e)=>setFirstname(e.target.value)}
   value={firstname} required/>
   <br/>

   Last Name: <input type="text" 
   placeholder="Enter Last_name"
   onChange={(e)=>setLastname(e.target.value)}
   value={lastname} required/> 
   <br/>

   <button type={"submit"}>Submit</button>
   </form>
   {show &&(<h1 style={{fontFamily:"-apple-system"}}>Full Name:{fullname}</h1>)} 
   </> );

}