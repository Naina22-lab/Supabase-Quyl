// import React from 'react';
// import './Sidebar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTachometerAlt, faUser, faBook, faQuestionCircle, faChartPie, faCog } from '@fortawesome/free-solid-svg-icons';

// const Sidebar = () => {

//   return (
//     <div className="sidebar">
//       <div className="sidebar-logo">
//         <img src=''/>
//         <h2>Quyl.</h2>
//       </div>
//       <ul className="sidebar-menu">
//         <li>
//           <FontAwesomeIcon icon={faTachometerAlt} className="menu-icon" />
//           <span>Dashboard</span>
//         </li>
//         <li className="active">
//           <FontAwesomeIcon icon={faUser} className="menu-icon" />
//           <span>Students</span>
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faBook} className="menu-icon" />
//           <span>Chapter</span>
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faQuestionCircle} className="menu-icon" />
//           <span>Help</span>
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faChartPie} className="menu-icon" />
//           <span>Reports</span>
//         </li>
//         <li>
//           <FontAwesomeIcon icon={faCog} className="menu-icon" />
//           <span>Settings</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import './Chatpter';
import './Dashboard';
import './Help';
import './Reports';
import './Settings'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faUser, faBook, faQuestionCircle, faChartPie, faCog } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', icon: faTachometerAlt, path: '/dashboard' },
    { name: 'Students', icon: faUser, path: '/students' },
    { name: 'Chapter', icon: faBook, path: '/chapter' },
    { name: 'Help', icon: faQuestionCircle, path: '/help' },
    { name: 'Reports', icon: faChartPie, path: '/reports' },
    { name: 'Settings', icon: faCog, path: '/settings' },
  ];

  const handleNavigation = (item) => {
    setActiveTab(item.name);
    navigate(item.path);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src="data:image/png;base64,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" alt="Logo" />
        <h2>Quyl.</h2>
      </div>
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={activeTab === item.name ? 'active' : ''}
            onClick={() => handleNavigation(item)}
          >
            <FontAwesomeIcon icon={item.icon} className="menu-icon" />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
