import React, { useState } from 'react'

function Portfolio() {
  const [photos] = useState([
    {
      name: 'UY Career',
      gitlink: 'https://github.com/cjacktwil/uncode-your-career',
      applink: 'https://murmuring-everglades-03231.herokuapp.com',
      description: 'DESCRIPTION: A MERN stack SPA that allows recent coding boot camp grads to search for available jobs in the industry.'
    },
    {
      name: 'Buy Smart',
      applink: 'https://fast-bastion-33726.herokuapp.com',
      gitlink: 'https://github.com/Alex2055/Buysmart',
      description: 'sasdfasfdadaf'
    },
    {
      name: 'Doggyprdia',
      applink: 'https://kray306090.github.io/yorkie-terrier/',
      gitlink: 'https://github.com/KRAY306090/yorkie-terrier',
      description: 'sasdfasfdadaf'
    },
    {
      name: 'Weather App',
      applink: 'https://alex2055.github.io/6th-week-challenge/index.html',
      gitlink: 'https://github.com/Alex2055/third-week-challenge',
      description: 'sasdfasfdadaf'
    },
    {
      name: 'Scheduler',
      gitlink: 'https://github.com/Alex2055/5th-week-challenge',
      applink: 'https://alex2055.github.io/5th-week-challenge',
      description: 'sasdfasfdadaf'
    },
    {
      name: 'Generator',
      gitlink: 'https://github.com/Alex2055/third-week-challenge',
      applink: 'https://alex2055.github.io/third-week-challenge',
      description: 'sasdfasfdadaf'
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
          </div>

        ))}
      </div>
    </div>
  )
}

export default Portfolio;