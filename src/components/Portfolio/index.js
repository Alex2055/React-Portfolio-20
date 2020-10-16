import React, {useState} from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";


function Portfolio() {
    const [photos] = useState([
        {
          name: 'Weather App',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          link: 'https://alex2055.github.io/6th-week-challenge/index.html'
        },
        {
          name: 'Grocery booth',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Building exterior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Restaurant table',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cafe interior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cat green eyes',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Green parrot',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Yellow macaw',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        } ]);
    
    return (
        <div>
          <div className="flex-row">
            {photos.map((image, i) => (
                <div className="image-container" style={{backgroundImage: `url(${require(`../../assets/projects/${i}.png`)})`}}>
                    <a className="git-link" href={image.link}>
            <img className="foo-img"
                src={require(`../../assets/icons/github.png`)}
              />
              </a>
                <div ><a href={image.link} className="project-name">{image.name}</a>
                </div>
                </div>
            
            ))}
          </div>
        </div>
      )
}

export default Portfolio;