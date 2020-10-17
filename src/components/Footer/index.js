import React from 'react';

function Footer() {
  return (
    <footer>
      <a href="http://github.com/Alex2055">
        <img className="foo-img"
          src={require(`../../assets/icons/github.png`)}
        />
      </a>
      <a href="http://linkedin.com">
        <img className="foo-img"
          src={require(`../../assets/icons/linkedin.png`)}
        />
      </a>
      <a href="http://twitter.com">
        <img className="foo-img"
          src={require(`../../assets/icons/twitter.png`)}
        />
      </a>
    </footer>
  )
}
export default Footer;