import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import "./Filter.scss";

import { ShopStore } from "src/shop-store";

const tabs = [
  {
    label: "Art",
    icon: "palette",
    query: "art",
  },
  {
    label: "Plants",
    icon: "seedling",
    query: "plants",
  },
  {
    label: "Clothing",
    icon: "tshirt",
    query: "fashion",
  },
  {
    label: "Jewellery",
    icon: "gem",
    query: "jewellery",
  },
  {
    label: "Gifts",
    icon: "gift",
    query: "gifts",
  },
  {
    label: "Food",
    icon: "ice-cream",
    query: "food",
  },
  {
    label: "Stationary",
    icon: "pen-fancy",
    query: "stationary",
  },
  {
    label: "Home",
    icon: "chair",
    query: "home",
  },
];

interface ITab {
  label: string;
  icon: string;
  query: string;
}

function Filter() {
  const [activeTab, setActiveTab] = useState("");
  const { shopDispatch } = useContext(ShopStore);

  const handleSetActiveTab = (tab: ITab) => {
    if (activeTab === tab.label) {
      setActiveTab("");
      shopDispatch({
        type: "update-query",
        payload: {
          query: "",
        },
      });
    } else {
      setActiveTab(tab.label);
      shopDispatch({
        type: "update-query",
        payload: {
          query: tab.query,
        },
      });
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
              onClick={() => handleSetActiveTab(tab)}
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
