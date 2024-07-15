import React,{useState,useContext} from 'react'
import {GlobalCtx} from '../App'

 const Login = (props) => {
    const {gState, setGState}= useContext(GlobalCtx)
   const {url} = gState
   const emptyUser = {
    username:'',
     password:''
   }

   const [form, setForm]= useState(emptyUser)

  const handleChange =(e) => {
  
  setForm({...form,[e.target.name]:e.target.value})
   }

   const handleSubmit = (event)=>{
    event.preventDefault()
  const {username, password} = form

   fetch(`${url}/auth/login`,{
       method: 'POST',
       headers: { 'Content-Type':'application/json'},
       body : JSON.stringify({username,password})
   })
   .then(response => response.json())
   .then(data => {
       console.log(data)
       setGState({...gState,token:data.token})
       setForm(emptyUser)
       props.history.push('/home')
   })
   


   }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='username' value={form.username} onChange={handleChange}/>
                <input type="password" name='password' value={form.password} onChange={handleChange}/>
                <input type="submit" value="login"/>
            </form>
        </div>
    )
}


export default Login