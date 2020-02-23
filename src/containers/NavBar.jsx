import React, { Component } from 'react'

//component
import Icon from '../component/Icon/Icon';

const NavBar = () => {
    return (
     <nav className="navbar navbar-dark bg-dark row">
       <Icon type='newspaper col p-0'/> 
       <a className="navbar-brand col p-0" href="#">
          News Reader
       </a>
       <Icon type='home'/> 
    </nav>
    )
}

export default NavBar;