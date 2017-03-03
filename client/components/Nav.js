import React, { Component } from 'react';
import { Link } from 'react-router';


const Nav = ({items}) => (
    <nav className="menu">
        {NavList.map(item => (
             <div className="item" key={item}>
                 <Link to={"/" + {item}}>
                     {item.charAt(0).toUpperCase() + item.slice(1)}
                 </Link>
             </div>
         ))}
    </nav>
);

const NavList = [
    'start',
    'blog',
    'course',
    'login'
];


export { NavList };
export default Nav;
