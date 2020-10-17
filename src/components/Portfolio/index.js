import React, { useState } from 'react'

function Portfolio() {
  const [photos] = useState([
    {
      name: 'Weather App',
      applink: 'https://alex2055.github.io/6th-week-challenge/index.html',
      gitlink: 'https://github.com/Alex2055/third-week-challenge'
    },
    {
      name: 'Horiseon',
      gitlink: 'https://github.com/Alex2055/first-week-challenge',
      applink: 'https://alex2055.github.io/first-week-challenge'
    },
    {
      name: 'Scheduler',
      gitlink: 'https://github.com/Alex2055/5th-week-challenge',
      applink: 'https://alex2055.github.io/5th-week-challenge'
    },
    {
      name: 'Generator',
      gitlink: 'https://github.com/Alex2055/third-week-challenge',
      applink: 'https://alex2055.github.io/third-week-challenge',
    },
    {
      name: 'Doggyprdia',
      applink: 'https://kray306090.github.io/yorkie-terrier/',
      gitlink: 'https://github.com/KRAY306090/yorkie-terrier',
    },
    {
      name: 'Buy Smart',
      applink: 'https://fast-bastion-33726.herokuapp.com',
      gitlink: 'https://github.com/Alex2055/Buysmart',
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
          </div>

        ))}
      </div>
    </div>
  )
}

export default Portfolio;