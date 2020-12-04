import { FormEvent } from "react";
import { IShop } from "src/components/shops/shop.model";

interface IProps {
  shop: IShop;
  onUpdateShopForm: (event: FormEvent) => void;
}

export function ShopForm(props: IProps) {
  return (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="name of business"
            name="name"
            value={props.shop.name}
            onChange={props.onUpdateShopForm}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Online presence</label>
        <div className="field-body">
          <div className="field">
            <div className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder="url"
                name="url"
                value={props.shop.url || ""}
                onChange={props.onUpdateShopForm}
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
                value={props.shop.instagram || ""}
                onChange={props.onUpdateShopForm}
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
            placeholder="please enter some keywords, separated by commas"
            name="tags"
            value={props.shop.tags}
            onChange={props.onUpdateShopForm}
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
                value={props.shop.address || ""}
                onChange={props.onUpdateShopForm}
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <div className="select">
                <select
                  name="neighbourhood"
                  value={props.shop.neighbourhood || "Online"}
                  onChange={props.onUpdateShopForm}
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
            placeholder="please provide a description of the business"
            name="desc"
            value={props.shop.desc || ""}
            onChange={props.onUpdateShopForm}
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
              checked={!!props.shop.hasDelivery}
              onChange={props.onUpdateShopForm}
            />
            Offers delivery?
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              name="hasPickup"
              value="pickup"
              checked={!!props.shop.hasPickup}
              onChange={props.onUpdateShopForm}
            />
            Offers curbside pickup?
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              name="hasGiftCards"
              value="giftCards"
              checked={!!props.shop.hasGiftCards}
              onChange={props.onUpdateShopForm}
            />
            Offers gift cards?
          </label>
        </div>
      </div>

      <div className="field">
        <label className="label">Any other notes?</label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="misc"
            placeholder="feel free to leave an email if you'd like a reply"
            value={props.shop.misc || ""}
            onChange={props.onUpdateShopForm}
          />
        </div>
      </div>
    </div>
  );
}
