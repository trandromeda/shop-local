import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import "./Filter.scss";

const tabs = [
  {
    label: "Art",
    icon: "palette",
  },
  {
    label: "Plants",
    icon: "seedling",
  },
  {
    label: "Clothing",
    icon: "tshirt",
  },
  {
    label: "Jewellery",
    icon: "gem",
  },
  {
    label: "Gifts",
    icon: "gift",
  },
  {
    label: "Food",
    icon: "ice-cream",
  },
];

interface ITab {
  label: string;
  icon: string;
}

function Filter() {
  const [activeTab, setActiveTab] = useState("");

  const handleSetActiveTab = (tab: string) => {
    if (activeTab === tab) {
      setActiveTab("");
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <div className="tabs is-toggle is-centered">
      <ul>
        {tabs.map((tab: ITab) => {
          return (
            <li
              key={tab.label}
              className={activeTab === tab.label ? "is-active" : ""}
              onClick={() => handleSetActiveTab(tab.label)}
            >
              <a>
                <span className="icon is-small">
                  <FontAwesomeIcon icon={tab.icon as IconName} />
                </span>
                <span>{tab.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Filter;
