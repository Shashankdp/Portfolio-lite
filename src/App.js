import React from "react";
import Navbar from "./Components/navbar.js";
import AboutMe from "./Components/Aboutme.js";
import Section from "./Components/Sections.js"
import sectionData from "./datas/sectionData.js";



const App = () => {
    return (
        <div>
            <Navbar />
            <AboutMe></AboutMe>
            {
                sectionData.map((value) => (
                    <Section title={value.title} des={value.des} />
                ))
            }

        </div>
    )
}

export default App;




//in JSX
// instead of using, if else we use => ternary operator
// instead of, loops => map, filter, reduce, foreach