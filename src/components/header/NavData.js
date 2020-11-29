import React from 'react';

import * as GoIcons from "react-icons/go";

import * as FaIcons from "react-icons/fa"

import * as FiIcons from "react-icons/fi"

import * as AiIcons from "react-icons/ai"



export const sidebarMenuData = [

{
    title: 'Home',
    path: '/Home',
    icon: <GoIcons.GoHome />,
},
{
    title: 'Android',
    path: '/Android',
    icon: <GoIcons.GoDeviceMobile />,

},
{
    title: 'Gadget & Local Hub',
    path: '/Gadget',
    icon: <AiIcons.AiOutlineFileUnknown />,
},
{
    title: 'Public Server',
    path: '/PublicServer',
    icon: <FaIcons.FaServer  />,
},
{
    title: 'Web Server',
    path: '/WebServer',
    icon: <FaIcons.FaReact />,
},
{
    title: 'About',
    path: '/About',
    icon: <FiIcons.FiInfo  />,
}
]