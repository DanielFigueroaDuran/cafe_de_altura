// import React from 'react'
// //import Navbar from '../Navbar'
// import SectionHero from '../SectionHero'
// import CardConditions from '../CardConditions'
// import SectionCoffe from '../SectionCoffe'
// import FrequentQuestions from '../FrequentQuestions'
// import SectionImages from '../SectionImages'
// import Contact from '../Contact '
// import Footer from '../Footer'

import CardConditions from "../coffepage/CardConditions"
import FrequentQuestions from "../coffepage/FrequentQuestions"
import SectionCoffe from "../coffepage/SectionCoffe"
import SectionHero from "../coffepage/SectionHero"
import SectionImages from "../coffepage/SectionImages"


const CoffePages = () => {
    return (
        <>

            <SectionHero />
            <CardConditions />
            <SectionCoffe />
            <FrequentQuestions />
            <SectionImages />
            {/* <Contact />
            <Footer /> */}
        </>
    )
}

export default CoffePages