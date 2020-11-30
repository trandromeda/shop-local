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
      <header className="card-header">
        <p
          className="shop__title card-header-title is-centered"
          onClick={handleSelectShop}
          title={`Click to visit ${props.shop.name}`}
        >
          {props.shop.name}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <p className="shop__desc">{props.shop.desc}</p>
          {props.shop.instagram && (
            <p className="shop__instagram" onClick={handleSelectInstagram}>
              Instagram: @{props.shop.instagram}
            </p>
          )}
          <div className="shop__geo">
            {props.shop.address && <p>Address: {props.shop.address}</p>}
            {props.shop.neighbourhood && (
              <p>Neighbourhood: {props.shop.neighbourhood}</p>
            )}
          </div>
        </div>
      </div>
      <footer className="card-footer shop__metadata">
        {props.shop.hasDelivery && (
          <p className="card-footer-item">
            Delivery: Yes
            {props.shop.hasDelivery === "local" && (
              <span className="metadata__local"> (local only)</span>
            )}
          </p>
        )}
        {props.shop.hasPickup && (
          <p className="card-footer-item">Pickup: Yes</p>
        )}
        {props.shop.hasGiftCards && (
          <p className="card-footer-item">Gift cards: Yes</p>
        )}
      </footer>
    </div>
  );
}

export default Shop;
