import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { IShop } from "../../shop.model";
import "./ShopEdit.scss";

interface IProps {
  shop?: IShop;
  onSetShopToEdit: (shop: undefined) => void;
}

export function ShopEdit(props: IProps) {
  useEffect(() => {
    console.log(props);
  }, [props.shop]);
  return (
    <div className={`modal ${props.shop ? "is-active" : ""}`}>
      <div
        className="modal-background"
        onClick={() => props.onSetShopToEdit(undefined)}
      ></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.shop?.name}</p>
          <span className="close">
            <FontAwesomeIcon
              icon="times"
              title="close"
              aria-label="close"
              onClick={() => props.onSetShopToEdit(undefined)}
            />
          </span>
        </header>
        <section className="modal-card-body">Some content</section>
        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button
            className="button"
            onClick={() => props.onSetShopToEdit(undefined)}
          >
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}
