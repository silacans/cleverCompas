import React from 'react';
import '../index.css';
import Sidebar from '../components/Sidebar'; 

const About = () => {
  return (
    
    <Sidebar>
    <div className="about-page">
  
          {/* Now this us where you will put your html code */}
      <h1>About CleverCampus</h1>
      <p>
        CleverCampus is your ultimate solution for managing your academic and professional life. 
        From organizing your schedule to staying connected with students and teachers, we make it simple and efficient.
      </p>
      <p>
        Our mission is to empower learners and educators with tools that foster success in an ever-changing world.
      </p>
    </div>
  </Sidebar>
  );
};

export default About;
