import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tabs = ({classList, tabs, onTabClick}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const {containerClass, tabClass, activeTabClass, tabLabelClass} = classList;
  return (
    <ul className={containerClass}>
      {tabs.map((tab) => (
        <li key={tab} className={classNames(tabClass, {
          [activeTabClass]: tab === activeTab
        })}>
          <span
            className={tabLabelClass}
            onClick={() => {
              setActiveTab(tab);
              onTabClick(tab);
            }}
            style={{cursor: `pointer`}}
          >
            {tab}
          </span>
        </li>
      ))}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onTabClick: PropTypes.func.isRequired,
  classList: PropTypes.shape({
    containerClass: PropTypes.string,
    tabClass: PropTypes.string,
    activeTabClass: PropTypes.string,
    tabLabelClass: PropTypes.string,
  })
};

export default Tabs;
