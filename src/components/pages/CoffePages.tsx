import CardConditions from "../coffepage/CardConditions"
import Contact from "../coffepage/Contact "
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
            <Contact />
        </>
    )
}

export default CoffePages