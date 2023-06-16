import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'


export const SidebarData = [
    {
        title: 'Home',
        path: `/`,
        icon: <AiIcons.AiFillHome />,
        
    },
    {
        title: 'Feedbacks',
        path: `/feedbacks`,
        icon: <FaIcons.FaUsers />,
    },
]