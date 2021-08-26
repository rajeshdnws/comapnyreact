import React, { Component } from 'react'
import {Link} from "react-router-dom";

export class TopMenu extends Component {
    render() {
        return (
            <>   

         <nav className="nav-menu d-none d-lg-block">
        <ul>
          <li className="active"><Link to="/">Home</Link></li>

          <li><Link to="/aboutus">About</Link>       
          </li>

          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>

        </ul>
      </nav>    
            </>
        )
    }
}

export default TopMenu
