import React,{useState,useEffect} from 'react'
import Avatar from '@mui/material/Avatar';
import './SidebarChatt.css'
function SidebarChat({addnewchat}) {
    const [seed,setSeed]=useState('')
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])
    const createChat=()=>{}
  return (
    !addnewchat?(
    <div className="sidebarChat">
        <Avatar src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${seed}`}/>
        <div className="sidebarChatInfo">
            <h2>Room Name</h2>
            <p>Last message..</p>
            </div>
        </div>):(<div onClick={createChat} className="sidebarChat"><h2>Add New Chat</h2></div>)
  )
}

export default SidebarChat