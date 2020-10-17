import React from 'react';

function About() {
  return (
    <section className="my-5">

      <img src={require(`../../assets/images/bill.jpg`)} className="my-2" style={{ width: "75px", height: "100px" }} alt="photo" id="my-photo" />
      <p id="about">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Quisque dapibus sed quam non dignissim. In ac justo leo.
        Sed pretium in libero vitae tristique.
        Donec dapibus et urna vitae sodales.
        Donec feugiat, neque ac elementum mollis,
        quam orci finibus tellus, posuere accumsan turpis neque a augue.
        Vestibulum efficitur libero magna, vitae dapibus dui convallis sed.
        Morbi quis tristique lorem,
        tristique tempus eros.
        Ut aliquam dapibus vulputate.
        Vestibulum ac volutpat ligula.
        Sed placerat at arcu ut viverra.
        Donec id imperdiet ligula.
        Morbi quis bibendum nibh.
        Pellentesque tortor elit,
        tempus sit amet felis luctus,
        malesuada facilisis augue. Mauris vel augue luctus,
        maximus sem sit amet, dignissim lacus. Phasellus vitae placerat dui,
        efficitur ornare tellus. Maecenas in vulputate elit.

      </p>
    </section>
  );
}

export default About;