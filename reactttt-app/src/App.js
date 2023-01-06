
// import './App.css';
// import { useReducer} from 'react';
// import { useEffect} from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';



// function App() {
  // const [emotion, setEmotion] = useState("happy");

  // const [secondary,setSecondary] = useState("tired")

  // useEffect(()=>{
  //   console.log(`It's ${emotion} rightNow`)
  // },[emotion]);

  // useEffect(()=> {
  //   console.log(`It's ${secondary} around here!`);
  // },[secondary]);
  

  // return (
  //   <div className="App">
  //     <h1>Current emotion is {emotion}</h1>
  //     <button onClick={()=> setEmotion("sad")}>Sad</button>
  //     <button onClick={()=> setEmotion("excited")}>Excited</button>
  //     <h2>
  //       Current Secondary emotion is {secondary}.
  //     </h2>
  //     <button onClick={()=> setSecondary("grateful")}>Grateful</button>
  //     <button onClick={()=> setSecondary("blessed")}>Blessed</button>
  //   </div>
  // );

  // const [checked,setChecked] = useReducer(
  //   (checked) => !checked,false
  //   );
  // return (
  //   <div className='App'>
  //     <input 
  //     type="checkbox"
  //     value={checked}
  //     onChange ={setChecked}
  //     />
  //     <label>
  //       {checked ? "checked" : " not checked"}
  //     </label>

  //   </div>
  // )


//   const [title,setTitle]=useState("");
//   const [color,setColor]=useState("#000000")
// const submit =(event)=> {
//   event.preventDefault();
//   alert(`${title},${color}`)

//   setTitle("")
//   setColor("000000")
// }

//   return (
//     <form onSubmit={submit}>
//       <input type="text" 
//       onChange={(event) => {
//         setTitle(event.target.value)
//       }}
//        placeholder="Color title..."
//       value={title}/>
//       <input type="color" 
//       value={color}
//       onChange={(event) => {
//         setColor(event.target.value)
//       }}
//       />
//       <button>ADD</button>
//     </form>
//   )
// }

// export default App;


// import "./App.css";
// import { useState,useEffect } from "react";



// function App() {
//   const [data,setData] = useState(null);

//   useEffect(() => {
//     fetch(
//       `https://api.github.com/users/moonhighway`
//     ).then((response) => {
//       response.json()
//     }).then( setData)
//   },[]);

//   if(data) return <pre
//   return (

//     <></>
    
//   )
// }

// export default App;

import React from 'react'
import { Link,Outlet } from 'react-router-dom'

 export function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My website</h1>
    </div>
  )
}
export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About us</h1>
      <Outlet />
    </div>
  )
}
 
 
 export function History() {
   return (
     <div>
      <h1>Our History</h1>
     </div>
   )
 }
 

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact us</h1>
    </div>
  )
}

 function App() {
  return (
    <Home />
  )
}

export default App;

