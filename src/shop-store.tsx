import React, { createContext, useReducer } from "react";

type InitialState = {
  placeholder: string;
};

type ShopActions = {
  type: string;
};

const initialState: InitialState = {
  placeholder: "placeholder",
};

interface IShopContext {
  shopState: InitialState;
  shopDispatch: React.Dispatch<ShopActions>;
}
const ShopStore = createContext({} as IShopContext);

const ShopStoreProvider = ({ children }: any) => {
  const [shopState, shopDispatch] = useReducer(
    (state: InitialState, action: ShopActions) => {
      switch (action.type) {
        default:
          return state;
      }
    },
    initialState
  );
  return (
    <ShopStore.Provider value={{ shopState, shopDispatch }}>
      {children}
    </ShopStore.Provider>
  );
};

export { ShopStore, ShopStoreProvider };
