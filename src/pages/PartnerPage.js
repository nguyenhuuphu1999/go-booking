import React from 'react'

import Navbar from '../components/header/Navbar'
import Banner2 from '../components/partner/Banner2'
import Works from '../components/partner/Works'
import Support from '../components/partner/Support'

const PartnerPage = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Banner2 />
                <Works/>
                <Support />
            </div>
        </div>
    )
}

export default PartnerPage
