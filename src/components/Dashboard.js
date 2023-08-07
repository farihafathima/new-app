import React from 'react'
import { Header } from './Header'
import { MainContent } from './MainContent'
import { Footer1 } from './Footer1'

export const Dashboard = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <MainContent/>
            <hr/>
            <Footer1/>
        </div>
    )
}
