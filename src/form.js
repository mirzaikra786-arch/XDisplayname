import React,{ useState} from "react";

export default function Form (){
 const [firstname, setFirstname]=useState("");
 const [lastname, setLastname]=useState("")    
 const [fullname, setFullname]=useState("")

const handleSubmit=(e)=>{
      e.preventDefault();
      if(typeof(firstname)==='string' && typeof(lastname)==='string'){ 
         setFullname(`${firstname} ${lastname}`);}
      else{

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
   {firstname && lastname &&(<h1 style={{fontFamily:"-apple-system"}}>Full Name:{fullname}</h1>)} 
   </> );

}