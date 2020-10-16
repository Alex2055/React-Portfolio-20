
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import React, { useState } from 'react';



function App() {

    const [portfolioSelected, setPortfolioSelected] = useState(false);
    const [contactSelected, setContactSelected] = useState(false);
    const [resumeSelected, setResumeSelected] = useState(false);

    return (
        <div>
            <Nav
                resumeSelected={resumeSelected}
                setResumeSelected={setResumeSelected}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
                portfolioSelected={portfolioSelected}
                setPortfolioSelected={setPortfolioSelected}
            ></Nav>
            <main>
                <div>

                    {portfolioSelected ? (
                        <Portfolio></Portfolio>
                    )

                        : contactSelected ? (
                            <Contact></Contact>

                        )
                            : resumeSelected ? (
                                <Resume></Resume>

                            ) : <About></About>
                    }

                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;