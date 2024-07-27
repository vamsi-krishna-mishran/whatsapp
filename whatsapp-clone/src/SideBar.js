import React from 'react'
import Avatar from '@mui/material/Avatar';
import {IconButton} from '@material-ui/core'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat'
import  './sidebar.css'
function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar_header">
            <Avatar className="icons"/>
            <div className="sidebar_header_right">
                <IconButton>
               <DonutLargeIcon/>

                </IconButton>
                <IconButton>
               <ChatOutlinedIcon/>

                    </IconButton>
                <IconButton>
               <MoreVertOutlinedIcon/>

                    </IconButton>
                </div>
            </div>
        <div className="sidebar_search">
            <div className="sidebar_searchcontainer">
            <SearchOutlinedIcon/>
            <input placeholder="search or start new chart" type="text"/>
                </div>
            </div>
        <div className="sidebar_chats">
            <SidebarChat addnewchat/>
            <SidebarChat/>
            <SidebarChat/>
            </div>

        </div>
  )
}

export default SideBar