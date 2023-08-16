import React from 'react';
import ProjectItem from '../components/ProjectItem';
import Monitoring from '../assets/timeMonitoring.png';
import Calculator from '../assets/calculator.png';
import qrcode from '../assets/qrcode scanner.png';
import timeMonitoring from '../assets/timeMonitoring.png';
import "../styles/Project.css";

function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className='projectList'>
        <a href="link_to_time_monitoring">
          <ProjectItem name="Time Monitoring System" image={Monitoring} />
        </a>
        <a href="link_to_qrcode_scanner">
          <ProjectItem name="QrCode Scanner" image={qrcode} />
        </a>
        <a href="https://shilpaheidi.github.io/Angular-Calculator-App/">
          <ProjectItem name="Calculator App" image={Calculator} />
        </a>
      </div>
    </div>
  );
}

export default Projects;
