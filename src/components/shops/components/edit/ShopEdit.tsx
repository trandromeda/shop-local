import { FormEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IShop } from "../../shop.model";
import "./ShopEdit.scss";

interface IProps {
  shop?: IShop;
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
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="name of business"
                  name="name"
                  value={shopForm.name}
                  onChange={updateShopForm}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Online Presence</label>
              <div className="field-body">
                <div className="field">
                  <div className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="url"
                      name="url"
                      value={shopForm.url || ""}
                      onChange={updateShopForm}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Instagram account"
                      name="instagram"
                      value={shopForm.instagram || ""}
                      onChange={updateShopForm}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Keywords</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="please enter keywords"
                  name="tags"
                  value={shopForm.tags}
                  onChange={updateShopForm}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Location</label>
              <div className="field-body">
                <div className="field address--fullwidth">
                  <div className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="enter address (if applicable)"
                      name="address"
                      value={shopForm.address || ""}
                      onChange={updateShopForm}
                    />
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <div className="select">
                      <select
                        name="neighbourhood"
                        value={shopForm.neighbourhood || "Online"}
                        onChange={updateShopForm}
                      >
                        <option>Online</option>
                        <option>The Annex</option>
                        <option>The Junction</option>
                      </select>
                    </div>
                    <p className="help is-info">Select a neighbourhood</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Please provide a description of the business"
                  name="desc"
                  value={shopForm.desc}
                  onChange={updateShopForm}
                ></textarea>
              </div>
            </div>

            <div className="field">
              <div className="control edit__checkboxes">
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="hasDelivery"
                    value="delivery"
                    checked={!!shopForm.hasDelivery}
                    onChange={updateShopForm}
                  />
                  Offers Delivery?
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="hasPickup"
                    value="pickup"
                    checked={!!shopForm.hasPickup}
                    onChange={updateShopForm}
                  />
                  Offers Curbside Pickup?
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    name="hasGiftCards"
                    value="giftCards"
                    checked={!!shopForm.hasGiftCards}
                    onChange={updateShopForm}
                  />
                  Offers Gift cards?
                </label>
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
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
