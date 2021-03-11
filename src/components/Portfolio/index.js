import React, { useState } from 'react'

function Portfolio() {
  const [photos] = useState([
    {
      name: 'UY Career',
      gitlink: 'https://github.com/cjacktwil/uncode-your-career',
      applink: 'https://murmuring-everglades-03231.herokuapp.com',
      description: 'DESCRIPTION: A MERN stack SPA that allows recent coding boot camp grads to search for available jobs in the industry.',
      tools: 'BUILT WITH: MERN, JavaScript, Css, AntUI'
    },
    {
      name: 'Buy Smart',
      applink: 'https://fast-bastion-33726.herokuapp.com',
      gitlink: 'https://github.com/Alex2055/Buysmart',
      description: 'DESCRIPTION: BuySmart is an app that helps shoppers keep essential information at their fingertips.',
      tools: 'BUILT WITH: Handlebars JavaScript CSS Jquery Mobile BACKEND: Sequelize MySQL2 Express'
    },
    {
      name: 'Doggyprdia',
      applink: 'https://kray306090.github.io/yorkie-terrier/',
      gitlink: 'https://github.com/KRAY306090/yorkie-terrier',
      description: 'DESCRIPTION: Doggypedia aggregates informaiton on a wide variety of dog breeds in one place.',
      tools: 'BUILT WITH: HTML CSS Javascript Jquery Bumla.io'
    },
    {
      name: 'Weather App',
      applink: 'https://alex2055.github.io/6th-week-challenge/index.html',
      gitlink: 'https://github.com/Alex2055/third-week-challenge',
      description: 'DESCRIPTION: Check weather in multiple cities.',
      tools: 'BUILT WITH: HTML CSS Javascript Bootstrap Moment.js OpenWeather API'
    },
    {
      name: 'Scheduler',
      gitlink: 'https://github.com/Alex2055/5th-week-challenge',
      applink: 'https://alex2055.github.io/5th-week-challenge',
      description: 'DESCRIPTION: Simple calendar application that allows a user to save events for each hour of the day',
      tools: 'BUILT WITH: HTML CSS Javascript JQuery Moment.js'
    },
    {
      name: 'Generator',
      gitlink: 'https://github.com/Alex2055/third-week-challenge',
      applink: 'https://alex2055.github.io/third-week-challenge',
      description: 'DESCRIPTION: Generates a random password based on user-selected criteria',
      tools: 'BUILT WITH: HTML CSS Javascript'
    }
  ]);

  return (
    <div>
      <h2>Projects</h2>
      <div className="flex-row">
        {photos.map((image, i) => (
          <div className="image-container" style={{ backgroundImage: `url(${require(`../../assets/projects/${i}.png`)})` }}>
            <span className="git-link" href={image.gitlink}>
              <img className="foo-img"
                src={require(`../../assets/icons/github.png`)}
              />
            </span>
            <div className="app-link"><a href={image.applink} className="project-name">{image.name}</a>
            </div>
            <div className="desc">{image.description}</div>
            <div className="desc">{image.tools}</div>
          </div>

        ))}
      </div>
    </div>
  )
}

export default Portfolio;