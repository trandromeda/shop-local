import React, { useEffect, useState } from "react";
import fire from "../firebase";

import Shop from "./components/shop/Shop";

const db = fire.firestore();
interface IShops {
  [key: string]: IShop;
}

interface IShop {
  id: string;
  name: string;
}

function Shops() {
  const [shops, setShops] = useState<IShop[] | null>([]);
  useEffect(() => {
    let shopsRef = db.collection("shops");
    shopsRef.get().then((querySnapshot) => {
      const result: IShop[] = [];
      querySnapshot.forEach((doc) => {
        const shopData = doc.data() as IShop;
        const shopId = doc.id;
        result.push({ ...shopData, id: shopId });
      });
      setShops(result);
    });
  }, []);

  return (
    <div>
      {shops &&
        shops.map((shop) => {
          return <Shop key={shop.id} shop={shop} />;
        })}
    </div>
  );
}

export default Shops;
