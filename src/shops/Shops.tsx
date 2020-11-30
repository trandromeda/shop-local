import React, { useContext, useEffect, useState } from "react";
import { ShopStore } from "src/shop-store";
import fire from "../firebase";

import Shop from "./components/shop/Shop";
import Filter from "./components/filter/Filter";

const db = fire.firestore();
interface IShops {
  [key: string]: IShop;
}

interface IShop {
  id: string;
  name: string;
  tags: string[];
  url?: string;
  instagram?: string;
  desc?: string;
  address?: string;
  neighbourhood?: string;
  hasDelivery?: boolean;
  hasPickup?: boolean;
  hasGiftCards?: boolean;
}

function Shops() {
  const [shops, setShops] = useState<IShop[] | null>([]);
  const { shopState } = useContext(ShopStore);

  const getAllShops = () => {
    let shopsRef = db.collection("shops");
    shopsRef.get().then((querySnapshot) => {
      const result: IShop[] = [];
      querySnapshot.forEach((doc) => {
        const shopData = doc.data() as IShop;
        const shopId = doc.id;
        result.push({ ...shopData, id: shopId });
      });

      const shuffledShops = randomizeShops(result);
      setShops(shuffledShops);
    });
  };

  const getShopsByQuery = (query: string) => {
    let shopsRef = db.collection("shops");
    shopsRef
      .where("tags", "array-contains", query)
      .get()
      .then((querySnapshot) => {
        const result: IShop[] = [];
        querySnapshot.forEach((doc) => {
          const shopData = doc.data() as IShop;
          const shopId = doc.id;
          result.push({ ...shopData, id: shopId });
        });

        const shuffledShops = randomizeShops(result);
        setShops(shuffledShops);
      });
  };

  useEffect(() => {
    if (shopState.query) {
      getShopsByQuery(shopState.query);
    } else {
      getAllShops();
    }
  }, [shopState.query]);

  const randomizeShops = (shops: IShop[]) => {
    for (let i = shops.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shops[i], shops[j]] = [shops[j], shops[i]];
    }

    return shops;
  };

  return (
    <div>
      <Filter />
      <p>Click on a business' name to visit their website.</p>
      {shops &&
        shops.map((shop) => {
          return <Shop key={shop.id} shop={shop} />;
        })}
    </div>
  );
}

export default Shops;
