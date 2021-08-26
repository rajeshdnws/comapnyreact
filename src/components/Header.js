import React, { Component } from 'react'
import TopMenu from './TopMenu' 
export class Header extends Component {
    render() {
        return (
            <>
           <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo mr-auto"><a href="/"><span>Com</span>pany</a></h1>

      <TopMenu/>
      <div className="header-social-links">
        <a href="#" className="twitter"><i className="icofont-twitter"></i></a>
        <a href="#" className="facebook"><i className="icofont-facebook"></i></a>
        <a href="#" className="instagram"><i className="icofont-instagram"></i></a>
        <a href="#" className="linkedin"><i className="icofont-linkedin"></i></a>
      </div>

    </div>
  </header>
      </>
        )
    }
}

export default Header
