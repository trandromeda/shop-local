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

  return (
    <div className="shop" onClick={handleSelectShop}>
      <h3>{props.shop.name}</h3>
      <p>{props.shop.desc}</p>
    </div>
  );
}

export default Shop;
