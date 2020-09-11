import React from 'react'
import Layout from './index'
import {NavLink} from 'react-router-dom'

const lists = [
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/gallery',
        name: 'Gallery'
    },
    {
        path: '/rsvp',
        name: 'RSVP'
    }
]

const Nav = () => {
    return (
        <Layout>
             <nav className='flex justify-between pt-5 pb-5 bg-blue-400'>
                 <div className='ml-5'>
               <NavLink to='/home'><h1 className='text-2xl font-bold mt-0' style={{fontFamily:  'Parisienne'}}>LoveyDovey</h1></NavLink>  

                 </div>
            <ul className='flex justify-end mt-1'>
                {lists.map(navItem => 
                    <li className='mr-10'>
                    <NavLink exact activeClassName=" border-b-2" className='hover:text-blue-500' to={navItem.path}>{navItem.name}</NavLink>
                </li>
                    )}
            </ul>
        </nav>
        </Layout>
       
    )
}

export {Nav}