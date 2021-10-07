import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tabs = ({classList, tabs, onTabClick, defaultTab}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  const {containerClass, tabClass, activeTabClass, tabLabelClass} = classList;
  return (
    <ul className={containerClass}>
      {tabs.map((tab) => {
        const isActiveTab = tab === activeTab;
        return (
          <li key={tab} className={classNames(tabClass, {
            [activeTabClass]: isActiveTab
          })}>
            {
              isActiveTab ?
                <span className={tabLabelClass}>{tab}</span> :
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
            }
          </li>
        );
      })}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  classList: PropTypes.shape({
    containerClass: PropTypes.string,
    tabClass: PropTypes.string,
    activeTabClass: PropTypes.string,
    tabLabelClass: PropTypes.string,
  })
};

export default Tabs;
