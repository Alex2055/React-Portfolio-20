import React from 'react';

function Resume() {
  return (
    <section className="my-5">

      <a href="/assets/resume.txt" download>Download resume
</a>
      <div id="resume-container">
        <div className="res">
          <h1 id="Resume">Front-end Proficiencies</h1>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>responsive design</li>
            <li>React</li>
            <li>Bulma</li>
          </ul>
        </div>

        <div className="res">
          <h1 id="Resume">Back-end Proficiencies</h1>
          <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
    </section>
  );
}

export default Resume;