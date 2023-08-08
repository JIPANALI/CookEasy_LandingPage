import React, { useState } from 'react'

import {BsCart2} from "react-icons/bs"
import {HiOutlineBars3} from "react-icons/hi2"
import {Box,List,ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material"

import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import CommentRoundedIcon from "@mui/icons-material/CommentRounded"
import phoneRoundedIcon from "@mui/icons-material/PhoneRounded"
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Divider";
import Logo from "../Components/asset_Cook/logo.png"

const Navbar = () => {
    const [openMenu, setOpenMenu]=useState(false)

    const optionMenu=[
        {
            text:"Home",
            icon:<HomeIcon/>
        },
        {
            text:"ABout",
            icon:<InfoIcon/>
        },
        {
            text:"Testimonial",
            icon:<CommentRoundedIcon/>
        },
        {
            text:"Contact",
            icon:<phoneRoundedIcon/>
        },
        {
            text:"Cart",
            icon:<ShoppingCartRoundedIcon/>
        },

    ]
  return (
    <nav>
        
            <div className='nav-logo-container'>
                <img src={Logo} width={50} height={50}  alt=""/>

            </div>
            <div className='navbar-links-container'>
                <a href=''>Home</a>
                <a href=''>About</a>
                <a href=''>Testimonial</a>
                <a href=''>Contact</a>
                <a href=''><BsCart2 className='navbar-cart-icon'/></a>

                <button className='primary-button'>Booking Now</button>

            </div>
            
        
        <div>
                <HiOutlineBars3 onClick={()=>setOpenMenu(true)}/>
        </div>

        {/*
        <Drawer open={openMenu} onClose={()=>setOpenMenu(false)} anchor="right">
              <Box sx={{width:250}}
              role="presentation"
              onClick={()=>setOpenMenu(false)}
              onKeyDown={()=>setOpenMenu(false)}>
                  <List>
                    {optionMenu.map((item)=>(
                      <ListItem key={item.text} disablePadding>
                          <ListItemButton>
                              <ListItemIcon>
                                {item.icon}
                              </ListItemIcon>
                              <ListItemText primary={item.text}/>
                               
                          </ListItemButton>

                      </ListItem>
                    ))}
                  </List>
              </Box>


        </Drawer> */}

    </nav>

  )
}

export default Navbar