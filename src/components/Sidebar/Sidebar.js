import React from "react";
import { push as Menu } from "react-burger-menu";
import './Sidebar.css'


export default function SideBar(props) {

  const views = ['PatientStatus', 'HealthStats', 'PVTGTracker', 'PedalEdemaTracker'];

  React.useEffect(() => {
    for(let i = 0; i < views.length; i++){
      let element = document.getElementById(views[i]);
      if(views[i] !== props.currentView){
        if (element.classList.contains('sidebar-active')){
          element.classList.remove('sidebar-active');
        }
      }
      else{
        element.classList.add('sidebar-active');
      }
    }
  })

  return (
    // Pass on our props
    <Menu {...props}>
      <button className="menu-item" id="PatientStatus" onClick={() => props.changeView('PatientStatus')}>
        Patient Tracker
      </button>

      <button className="menu-item" id="HealthStats" onClick={() => props.changeView('HealthStats')}>
        Health Stats
      </button>

      <button className="menu-item" id="PVTGTracker" onClick={() => props.changeView('PVTGTracker')}>
        PVTG Tracker
      </button>

      <button className="menu-item" id="PedalEdemaTracker" onClick={() => props.changeView('PedalEdemaTracker')}>
        Pedal Edema Tracker
      </button>
    </Menu>
  );
};
