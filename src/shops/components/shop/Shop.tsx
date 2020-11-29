import React from "react";
import "./Shop.scss";

interface IShop {
  id: string;
  name: string;
  desc?: string;
}

type Props = {
  shop: IShop;
};

function Shop(props: Props) {
  return (
    <div className="shop">
      <h3>{props.shop.name}</h3>
      <p>{props.shop.desc}</p>
    </div>
  );
}

export default Shop;
