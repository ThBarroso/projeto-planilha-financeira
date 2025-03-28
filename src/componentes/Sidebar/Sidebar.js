import './Sidebar.css';
import {FaHome,FaRegFileAlt,FaChartPie,FaBullseye,FaCreditCard,FaCogs} from "react-icons/fa";
import React from 'react';
import Logo from '../Logo';

function Sidebar() {
  return (
    <div className="Sidebar">
      <header className="Sidebar-header">
        <Logo></Logo>
        <nav>
          <ul>
            <li><a href="/"><FaHome /> Home</a></li>
            <li><a href="/"><FaRegFileAlt /> Pages</a></li>
            <li><a href="/"><FaChartPie /> Charts</a></li>
            <li><a href="/"><FaBullseye /> Targets</a></li>
            <li><a href="/"><FaCreditCard /> Payments</a></li>
            <li><a href="/"><FaCogs /> Settings</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Sidebar;
