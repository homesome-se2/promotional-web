import React, {useState} from 'react';

import * as GoIcons from "react-icons/go";
import {Link} from 'react-router-dom';
import {sidebarMenuData as MenuData} from './NavData';

import './Navbar.css';


function Navbar() {
    const [sidebarMenu,setSidebarMenu] = useState(false);
    const showSidebarMenu = () => {
        setSidebarMenu(!sidebarMenu);

        if(!sidebarMenu){
            document.body.classList.add("stopScroll")
           
        }else{
            document.body.classList.remove("stopScroll")


        }

    } 
   
    const page = window.location.pathname;

    

    return (
       
        <>
            <div id="navbar">
                <Link to="#" className='menu-toggle'>
                <GoIcons.GoThreeBars onClick={showSidebarMenu} />
                </Link>
            </div>
            <nav className={sidebarMenu ? 'nav-menu open' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebarMenu}>
                   <li className='navbar-toggle'>
                    <Link to="#" className='menu-toggle'>
                        <GoIcons.GoEyeClosed />
                    </Link>
                   </li>
                  
                   {MenuData.map((item, i)=>{
                       return(
                           <li key={i} className='menu-text'>
                               <Link to={item.path}>
                                   {item.icon}
                                   <span>{item.title}</span>
                               </Link>
                           </li>
                       )
                   })}
                     
                </ul>
            </nav>
        </>
    )
}

export default Navbar
