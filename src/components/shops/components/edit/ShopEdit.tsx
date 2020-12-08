import { FormEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IShop } from "../../shop.model";
import "./ShopEdit.scss";

import { ShopForm } from "src/shared/shop-form/ShopForm";

interface IProps {
  shop?: IShop;
  isSubmitting: boolean;
  onSetShopToEdit: (shop: undefined) => void;
  onSubmitForm: (shop: IShop) => void;
}

export function ShopEdit(props: IProps) {
  const [shopForm, setShopForm] = useState<IShop | undefined>(undefined);

  useEffect(() => {
    setShopForm(props.shop);
  }, [props.shop]);

  const updateShopForm = (event: FormEvent<any>) => {
    const target = event.currentTarget;
    let value = target.type === "checkbox" ? target.checked : target.value;
    const field = event.currentTarget.name;

    if (field === "tags") {
      const stringToArray = value
        .split(",")
        .map((str: string) => str.trimLeft());
      value = stringToArray;
    }

    const updatedForm: { [path in keyof IShop]: any } = {
      id: shopForm?.id,
      name: shopForm?.name,
      tags: shopForm?.tags,
      ...shopForm,
      ...{ [field]: value },
    };

    setShopForm(updatedForm);
  };

  if (shopForm) {
    return (
      <div className={`modal ${props.shop ? "is-active" : ""}`}>
        <div
          className="modal-background"
          onClick={() => props.onSetShopToEdit(undefined)}
        ></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              <span className="title-prefix">Suggest changes for:</span>{" "}
              {shopForm.name}
            </p>
            <span className="close">
              <FontAwesomeIcon
                icon="times"
                title="close"
                aria-label="close"
                onClick={() => props.onSetShopToEdit(undefined)}
              />
            </span>
          </header>
          <section className="modal-card-body">
            <ShopForm shop={shopForm} onUpdateShopForm={updateShopForm} />
          </section>
          <footer className="modal-card-foot">
            <button
              className={`button is-success ${
                props.isSubmitting ? "is-loading" : ""
              }`}
              onClick={() => props.onSubmitForm(shopForm)}
            >
              Submit
            </button>
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
  } else {
    return <div></div>;
  }
}
