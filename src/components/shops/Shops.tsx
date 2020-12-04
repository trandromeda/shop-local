import React, { useCallback, useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import { toast as superToast } from "bulma-toast";

import { ShopStore } from "src/shop-store";
import fire from "src/firebase";

import Shop from "./components/shop-card/ShopCard";
import Filter from "./components/filter/Filter";
import { IShop } from "./shop.model";

import "./Shops.scss";
import { ShopEdit } from "./components/edit/ShopEdit";

const db = fire.firestore();

export function Shops() {
  const [shops, setShops] = useState<IShop[] | null>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [shopToEdit, setShopToEdit] = useState<IShop | undefined>(undefined);
  const { shopState } = useContext(ShopStore);

  const getShopsByQuery = useCallback((query: string) => {
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
  }, []);

  const getAllShops = useCallback(() => {
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
  }, []);

  useEffect(() => {
    if (shopState.query) {
      getShopsByQuery(shopState.query);
    } else {
      getAllShops();
    }
  }, [shopState.query, getAllShops, getShopsByQuery]);

  const randomizeShops = (shops: IShop[]) => {
    for (let i = shops.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shops[i], shops[j]] = [shops[j], shops[i]];
    }

    return shops;
  };

  const handleEditShop = (shop: IShop) => {
    setShopToEdit(shop);
  };

  const handleSubmitForm = async (shop: IShop) => {
    setIsSubmitting(true);
    Axios.post(
      "https://us-central1-shop-local-a6a08.cloudfunctions.net/sendMail?dest=webmaster.rougeapp@gmail.com",
      shop
    )
      .then((res) => {
        superToast({
          message:
            "Thank you for your submission! You can expect an update within 24 hours",
          type: "is-success",
          position: "center",
          dismissible: false,
          duration: 5000,
          animate: { in: "fadeIn", out: "fadeOut" },
        });
        setShopToEdit(undefined);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        superToast({
          message:
            "Sorry, something went wrong. Please try again or contact me using the link at the bottom",
          type: "is-danger",
          position: "center",
          dismissible: false,
          duration: 5000,
          animate: { in: "fadeIn", out: "fadeOut" },
        });
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <Filter />

      <div className="shops-instructions">
        <p>Click on a business' name to visit their website.</p>
        <div aria-hidden="true">
          <span className="shops__icon delivery">
            <FontAwesomeIcon icon="truck" /> = delivery
          </span>
          <span className="shops__icon pickup">
            <FontAwesomeIcon icon="shopping-bag" /> = curbside pickup
          </span>
          <span className="shops__icon gifts">
            <FontAwesomeIcon icon="gift" /> = gift cards
          </span>
        </div>
      </div>

      {!shops && <div className="loading">Loading...</div>}

      {shops?.length === 0 && shopState.query && (
        <div className="shops__no-results">
          Sorry, there were no results for "{shopState.query}". Please try
          another keyword.
        </div>
      )}

      <ShopEdit
        shop={shopToEdit}
        isSubmitting={isSubmitting}
        onSetShopToEdit={setShopToEdit}
        onSubmitForm={handleSubmitForm}
      />

      <div className="shops">
        {shops &&
          shops.map((shop) => {
            return (
              <Shop
                key={shop.id}
                shop={shop}
                onShowEdit={(shop: IShop) => handleEditShop(shop)}
              />
            );
          })}
      </div>
    </div>
  );
}
