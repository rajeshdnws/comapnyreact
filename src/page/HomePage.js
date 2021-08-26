import React, { Component } from 'react'
import Client from '../components/Client'
import HomeAbout from '../components/HomeAbout'
import HomePageSlider from '../components/HomePageSlider'
import Portfolio from '../components/Portfolio'
import Service from  '../components/Service'
import Footer from '../components/Footer'
export class HomePage extends Component {
    render() {
        return (
            <div>
                <HomePageSlider/>
                <main id="main">
                    <HomeAbout/>
                <Service/>
                <Portfolio/>
                <Client/>
                <Footer/>
</main>
                 </div>
        )
    }
}

export default HomePage
