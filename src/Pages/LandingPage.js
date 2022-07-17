import React from 'react'
import Carosel from '../component/Carosel'
import NavBarOne from '../component/NavBarOne'
import NavBarTwo from '../component/NavBarTwo'
import SubNav from "../component/SubNav"
import Services from "../component/Services"
import Item from '../component/Item'
import Card from '../component/Card'

function LandingPage() {
    return (
        <div>

            <NavBarOne />
            <NavBarTwo />
            <SubNav />
            <Carosel />
            <Services />
            <Item />
            <Card />

        </div>
    )
}

export default LandingPage
