import "./App.scss";
import fire from "./firebase";
import React, { useEffect, useState } from "react";

const db = fire.firestore();
interface IShops {
  [key: string]: IShop;
}

interface IShop {
  id: string;
  name: string;
}

function App() {
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

  if (shops) {
    return (
      <div className="App">
        <h1>
          <p>Shop Local!</p>
        </h1>
        {shops.map((shop) => {
          return <p key={shop.id}>{shop.name}</p>;
        })}
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <p>Shop Local!</p>
        </header>
      </div>
    );
  }
}

export default App;
