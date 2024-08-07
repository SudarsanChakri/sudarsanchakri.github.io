import './About.css'
import React, { useState } from 'react';

const About = () => {
  const [popUpContent, setPopUpContent] = useState(null);

  const showPopUpContent =(content) =>{
    setPopUpContent(content);
  }
  const closePopUp = () => {
    setPopUpContent(null);
  }
  return(
    <div id = 'about'>
      <h3>Welcome! Thanks for your interest in getting to know me.</h3>
      <br></br>
      <br></br>

      <button className='button' onClick = {() => showPopUpContent('whoami')}>Who Am I</button>
      <button className='button' onClick = {() => showPopUpContent('superpowers')}>Superpowers</button>
      <button className='button' onClick = {() => showPopUpContent('experience')}>Experience</button>
      <button className='button' onClick = {() => showPopUpContent('hobbies')}>Interests and Hobbies</button>

      {popUpContent &&(
        <div className='popup'>
          <div className='popup-content'>
            {popUpContent === 'whoami' && <div><p>Hey there! I'm Sudarsan Chakri, your friendly full stack developer.</p>
              <p> I born and raised in Andhra Pradesh, and an engineering graduate from Chennai, class of 2023.</p>
              <p>As a tech enthusiast, I'm always excited to explore new technologies and innovate solutions that make a difference.</p>
              <p>I specialize in creating seamless web applications, focusing on both front-end and back-end development. My journey in tech has equipped me with a diverse skill set and a strong foundation in various programming languages and frameworks.</p>
              </div>}
            {popUpContent === 'superpowers' && <div><p>My superpowers lie in my proficiency with a diverse range of technologies that allow me to build robust and dynamic web applications. Here are my main areas of expertise:
              </p>
            <p>Java: Strong foundation in Java programming, including both JSE and J2EE.</p>
            <p>Spring Boot: Extensive experience with the Spring Boot framework</p>
            <p>HTML & CSS: Proficient in crafting responsive and visually appealing web pages using HTML and CSS. I focus on ensuring accessibility and performance.</p>
            <p>JavaScript: Solid understanding of JavaScript, enabling me to create interactive and dynamic web applications.</p>
            <p>React.js: Experience in building modern, single-page and component-based applications using React.js.</p>
            <p>MySQL: Competent in using MySQL too for database management.</p>
            </div>}
            {popUpContent === 'experience' && <div>
              <h4>Full Stack Development Intern - KodNest (June, 2023 - Feb, 2024)</h4>
              <p>During my internship, I worked on a project called Tune Hub, a music streaming platform with features like customer and admin sign-in, premium subscription via Razorpay, and playlist creation. This experience solidified my skills in HTML, CSS, JavaScript, JSE, J2EE (JDBC, Hibernate, Spring, Spring Boot).
              </p>
              </div>}
            {popUpContent === 'hobbies' && <p>I enjoy solving coding problems and optimizing algorithms on platforms like LeetCode. Outside of coding, I'm passionate about fitness, nutrition, self-improvement, and playing chess. Cricket is another sport I follow closely.
              </p>}
            <button className="close-btn" onClick={closePopUp}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
  /*  
  return (
    <section id="about">
      <div id = "who">

      <h3>Who Am I?</h3>
  <p>Hey there! I'm Sudarsan Chakri, your friendly full stack developer.</p>
  <p>I born and brought up in Andhra Pradesh. Later, I am graduated in Tamilnadu</p>
  
      </div>
      <div id = "superpowers">
  <h3>Superpowers</h3>
  <ul>
    <li><strong>Back-end:</strong>Java</li>
    <li><strong>Front-end:</strong>HTML, CSS, JAVASCRIPT AND REACT JS</li>
    <li><strong>DBMS:</strong>MySQL</li>
  </ul>
  
  </div>
  <div id = "mission">
  <h3>Mission</h3>
  <p>To boldly code where no one has coded before, creating websites that are faster, stronger, and funnier than ever. Also, to ensure every visitor leaves with a smile. And wanted to be a perfect problem solver in leetcode</p>
  </div>
  <div id = "experience">
  <h3>Experience</h3>
  <p><strong>Full Stack Development Intern at KodNest (june 2023 - Feb 2024)</strong></p>
  <p>During my internship at KodNest in Bangalore, I gained
practical skills in Java, Full Stack development, and SQL
while contributing to real-world projects and learning
directly from industry professionals.
</p>
</div>
    </section>
  );
  */
};

export default About;
