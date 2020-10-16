import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About me</h1>
     <img src={require(`../../assets/images/bill.jpg`)} className="my-2" style={{ width: "75px", height: "100px" }} alt="photo" /> 
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus sed quam non dignissim. In ac justo leo. Sed pretium in libero vitae tristique. Donec dapibus et urna vitae sodales. Donec feugiat, neque ac elementum mollis, quam orci finibus tellus, posuere accumsan turpis neque a augue. Vestibulum efficitur libero magna, vitae dapibus dui convallis sed. Morbi quis tristique lorem, tristique tempus eros. Ut aliquam dapibus vulputate. Vestibulum ac volutpat ligula. Sed placerat at arcu ut viverra. Donec id imperdiet ligula. Morbi quis bibendum nibh. Pellentesque tortor elit, tempus sit amet felis luctus, malesuada facilisis augue. Mauris vel augue luctus, maximus sem sit amet, dignissim lacus. Phasellus vitae placerat dui, efficitur ornare tellus. Maecenas in vulputate elit.

Duis convallis, sapien ut ultrices ultricies, lectus felis efficitur ante, nec dapibus purus massa quis augue. Proin quis volutpat metus, sit amet condimentum nibh. Nam id pretium eros. Maecenas consequat bibendum odio, et vestibulum dui pulvinar id. Nunc luctus maximus convallis. Integer eu augue non quam auctor condimentum. Nunc venenatis libero vitae tortor tempor bibendum. In mattis varius enim, in condimentum nisi mattis in. Suspendisse potenti. Mauris eleifend eros magna, sit amet rhoncus tellus dapibus a. Morbi nisl tellus, dapibus a mattis non, dignissim nec risus. Quisque luctus tempus dolor dictum pharetra.

Nulla nec ultrices ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque porttitor felis quis mattis accumsan. Maecenas sem purus, pharetra vel tincidunt cursus, tempus in purus. Ut erat tellus, imperdiet nec ipsum quis, pretium commodo nibh. Donec sollicitudin congue magna, sit amet scelerisque massa tempus eget. Nulla fringilla auctor blandit. Donec ac ipsum sit amet arcu varius ultricies. Morbi condimentum turpis sit amet est condimentum blandit.
      </p>
    </section>
  );
}

export default About;