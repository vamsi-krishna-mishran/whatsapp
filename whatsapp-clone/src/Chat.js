import React from 'react'
import Avatar from '@mui/material/Avatar';
import {IconButton} from '@material-ui/core'
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import './chat.css'
import {useEffect,useState} from 'react'
function Chat() {
  const [seed,setSeed]=useState('')
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])
    const sendMessage=()=>{
      fetch("https://localhost:5000/").then((data)=>console.log(data))
    }
  return (
    <div className="chat">
      <div className="chat_header">
      <Avatar className="icons" src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${seed}`}/>
        <div className="chat_header_info">
          <h3>Room name</h3>
          <p>Last seen at ...</p>
          </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchOutlinedIcon/>
            </IconButton>
            <IconButton>
              <AttachFileOutlinedIcon/>
              </IconButton>
            <IconButton>
              <MoreVertOutlinedIcon/>
              </IconButton>
          </div>
        </div>
      <div className="chat_body">
        
        <p className={`chat_message ${true && 'chat_receive'}`}>
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        <p className="chat_message">
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        <p className="chat_message">
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        <p className={`chat_message ${true && 'chat_receive'}`}>
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        <p className={`chat_message ${true && 'chat_receive'}`}>
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        <p className={`chat_message ${true && 'chat_receive'}`}>
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        <p className="chat_message">
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        <p className="chat_message">
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        <p className={`chat_message ${true && 'chat_receive'}`}>
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        <p className={`chat_message ${true && 'chat_receive'}`}>
        <span className="chat_name">vamsi</span>
          Hi
          <span className="chat_time">3:52PM</span>
        </p>
        </div>
      <div className="chat_footer">
        <IconButton>
          <MoodOutlinedIcon onClick={sendMessage}/>
          </IconButton>
          <input placeholder="Type a message"/>
          <IconButton>
            <KeyboardVoiceOutlinedIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default Chat