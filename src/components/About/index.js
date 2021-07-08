import React from 'react';

function About() {
  return (
    <section className="my-5">

      <img src={require(`../../assets/images/bill.jpg`)} className="my-2" style={{ width: "100px", height: "100px" }} alt="photo" id="my-photo" />
      <p id="about">
      I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time. 

      </p>
    </section>
  );
}

export default About;