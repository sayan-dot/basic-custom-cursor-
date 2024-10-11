import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [position,setPosition]=useState({x:0,y:0})
  useEffect(()=>{
    const cursor=(e)=>{
      setPosition({x:e.clientX,y:e.clientY})
    }
    window.addEventListener("mousemove",cursor);
    return ()=> window.removeEventListener("mousemove", cursor)
  },[])
  return (
    <>
      <div id="custome_cursor" style={{
        left:`${position.x}px`,
        top:`${position.y}px`
      }}/>
      <h1>Hover over this page</h1>
    </>
  );
}

export default App;
