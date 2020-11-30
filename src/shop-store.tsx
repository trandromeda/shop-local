import React, { createContext, useReducer } from "react";

type InitialState = {
  query: string;
};

type ShopActions = {
  type: "update-query";
  payload: {
    query: string;
  };
};

const initialState: InitialState = {
  query: "",
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
        case "update-query":
          return {
            ...state,
            query: action.payload.query,
          };
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
