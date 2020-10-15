import React from 'react';
function Nav(props) {

    const {
        resumeSelected,
        setResumeSelected,
        contactSelected,
        setContactSelected,
        portfolioSelected,
        setPortfolioSelected
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Alexander Vasilkov
          </a>
            </h2>
            <nav>
                <ul className="flex-row">
                <li>
                    {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}> */}
                    <span onClick={() => {
                        setResumeSelected(false)
                        setPortfolioSelected(false)
                        setContactSelected(false);
                    }}>About me</span>
                        {/* <span onClick={() => setContactSelected(true)}>Contact</span> */}
                    </li>
                    <li className="mx-2">
                        {/* <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}> */}
                        <span onClick={() => {
                            setResumeSelected(false)
                            setPortfolioSelected(false)
                            setContactSelected(true);
                        }}>Contact</span>
              {/* </a> */}
                    </li>
                    <li>
                    {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}> */}
                    <span onClick={() => {
                        setResumeSelected(false)
                        setPortfolioSelected(true)
                        setContactSelected(false);
                    }}>Portfolio</span>
                        {/* <span onClick={() => setContactSelected(true)}>Contact</span> */}
                    </li>
                    <li>
                    {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}> */}
                    <span onClick={() => {
                        setResumeSelected(true)
                        setPortfolioSelected(false)
                        setContactSelected(false);
                    }}>Resume</span>
                        {/* <span onClick={() => setContactSelected(true)}>Contact</span> */}
                    </li>

                </ul>
            </nav>
        </header>
    );
}

export default Nav;