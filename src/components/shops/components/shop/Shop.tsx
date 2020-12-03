import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Shop.scss";

interface IShop {
  id: string;
  name: string;
  tags: string[];
  url?: string;
  instagram?: string;
  desc?: string;
  address?: string;
  neighbourhood?: string;
  hasDelivery?: boolean | "local";
  hasPickup?: boolean;
  hasGiftCards?: boolean;
}

type Props = {
  shop: IShop;
};

function Shop(props: Props) {
  const handleSelectShop = () => {
    const url =
      props.shop.url || `https://instagram.com/${props.shop.instagram}`;
    if (url) window.open(url, "_blank");
  };

  const handleSelectInstagram = () => {
    const url = `https://instagram.com/${props.shop.instagram}`;
    if (url) window.open(url, "_blank");
  };

  return (
    <div className="card shop">
      {/* <div className="card-image">
        <figure className="image is-4by3">
          <img
            src="https://source.unsplash.com/collection/904967/800x600?sig={props.shop.id}"
            alt="Placeholder"
          />
        </figure>
      </div> */}
      <header className="card-header">
        <p
          className="shop__title card-header-title"
          onClick={handleSelectShop}
          title={`Click to visit ${props.shop.name}`}
        >
          {props.shop.name}
        </p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <FontAwesomeIcon icon="angle-down" />
          </span>
        </a>
      </header>
      <div className="card-content">
        <div className="content">
          {props.shop.tags[0]} in {props.shop.neighbourhood || "Toronto"}
          <p className="shop__desc">{props.shop.desc}</p>
          {props.shop.instagram && (
            <p className="subtitle is-6" onClick={handleSelectInstagram}>
              @{props.shop.instagram}
            </p>
          )}
        </div>
      </div>
      <footer className="card-footer shop__metadata">
        <div className="card-footer-item">
          {props.shop.hasDelivery && (
            <span className="metadata__delivery shops__icon delivery">
              {props.shop.hasDelivery === "local" && (
                <span className="metadata__local">Local</span>
              )}{" "}
              <FontAwesomeIcon icon="truck" title="This shop offers delivery" />
            </span>
          )}
          {props.shop.hasPickup && (
            <span className="metadata__pickup shops__icon pickup">
              <FontAwesomeIcon
                icon="shopping-bag"
                title="This shop offers curbside pickup"
              />
            </span>
          )}
          {props.shop.hasGiftCards && (
            <span className="metadata__card shops__icon gifts">
              <FontAwesomeIcon
                icon="gift"
                title="This shop offers gift cards"
              />
            </span>
          )}
        </div>
        <div className="card-footer-item">
          <div className="shop__geo">
            {props.shop.address && <span>{props.shop.address}</span>}
            {!props.shop.address && <span>Online</span>}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Shop;
