import Button from "@material-ui/core/Button";
// Types
import { CartItemType } from "../../view/HomeView";
// Styles
import { Wrapper } from "./Item.styles";

type ProductItem = {
  item: CartItemType;
};

const Item: React.FC<ProductItem> = ({ item }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
    <Button>Add to cart</Button>
  </Wrapper>
);

export default Item;
