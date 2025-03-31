import React from 'react';
import { FaBullseye, FaChartPie, FaCogs, FaCreditCard, FaHome, FaRegFileAlt } from "react-icons/fa";
import logo from '../../img/logo.jpeg';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="Sidebar">
      <header className="Sidebar-header">
        <div className="Sidebar-logo">
          <img src={logo} alt="Logo" />
          <p>Wallet Mate</p>
        </div>
        <nav>
          <ul>
            <li><a href="/"><FaHome /><span>Home</span></a></li>
            <li><a href="/"><FaRegFileAlt /><span>Extrato</span></a></li>
            <li><a href="/"><FaChartPie /><span>Gastos</span></a></li>
            <li><a href="/"><FaBullseye /><span>Objetivos</span></a></li>
            <li><a href="/"><FaCreditCard /><span>Bancos</span></a></li>
            <li><a href="/"><FaCogs /><span>Configurações</span></a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Sidebar;
