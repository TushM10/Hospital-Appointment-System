import React from 'react'
import Features from './HomeComponents/Features'
import Highights from './HomeComponents/Highights'
import HomeBanner from './HomeComponents/HomeBanner'
import SubBanner from './HomeComponents/SubBanner'
import Contact from './Contact'

function Home() {
    return (
        <>
            <HomeBanner/>
            <Features/>
            <SubBanner/>
            <Highights/>
            <Contact/>
        </>
    )
}

export default Home
