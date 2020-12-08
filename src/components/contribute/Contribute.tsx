import { FormEvent, useEffect, useState } from "react";
import Axios from "axios";
import { ShopForm } from "src/shared/shop-form/ShopForm";
import { IShop } from "../shops/shop.model";

import "./Contribute.scss";

export function Contribute() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [shopForm, setShopForm] = useState<IShop>({
    name: "",
    tags: [],
    url: "",
    instagram: "",
    desc: "",
    address: "",
    neighbourhood: "",
    hasDelivery: false,
    hasPickup: false,
    hasGiftCards: false,
    isLocalDelivery: false,
  });

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
      ...shopForm,
      ...{ [field]: value },
    };

    setShopForm(updatedForm);
  };

  const handleSubmitForm = async (event: FormEvent) => {
    setIsSubmitting(true);
    Axios.post(
      "https://us-central1-shop-local-a6a08.cloudfunctions.net/sendMail?dest=webmaster.rougeapp@gmail.com",
      shopForm
    )
      .then((_res) => {
        setIsSubmitted(true);
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setHasError(true);
        setIsSubmitting(false);
      });
  };

  return (
    <div>
      <div className="card contribute">
        <header className="card-header">
          <p className="card-header-title title is-4">
            {shopForm.name || "Add a new shop"}
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <ShopForm shop={shopForm} onUpdateShopForm={updateShopForm} />
          </div>
        </div>
        <footer className="card-footer">
          <div className="card-footer-item is-primary">
            <button
              className={`button is-primary ${
                isSubmitting ? "is-loading" : ""
              }`}
              onClick={handleSubmitForm}
            >
              Submit!
            </button>
          </div>
        </footer>
      </div>
      {isSubmitted && (
        <div className="contribute message-container">
          <article className="message is-success is-centered">
            <div className="message-body">
              Thank you so much for your submission! I review all shops manually
              before adding them to the site. You can expect an update within 24
              hours.
            </div>
          </article>
        </div>
      )}

      {hasError && (
        <div className="contribute message-container">
          <article className="message is-danger is-centered">
            <div className="message-body">
              Sorry, something went wrong with your submission. Please try
              again, or get in touch with me using the Contact link below.
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
