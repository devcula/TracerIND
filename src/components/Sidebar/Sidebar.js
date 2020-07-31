import React from "react";
import { slide as Menu } from "react-burger-menu";
import './Sidebar.css'

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <a className="menu-item" href="/patient-tracker">
        Patient Tracker
      </a>

      <a className="menu-item" href="/health-stats">
        Health Stats
      </a>

      <a className="menu-item" href="/pvtg-tracker">
        PVTG Tracker
      </a>

      <a className="menu-item" href="/pedal-edema-tracker">
        Pedal Edema Tracker
      </a>
    </Menu>
  );
};
