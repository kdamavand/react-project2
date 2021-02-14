import { useQuery } from "react-query";
import Item from "../components/item/Item";
import Grid from "@material-ui/core/Grid";
// Styles
import { Wrapper } from "../App.styles";

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

export const GetProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

export const HomeView = () => {
  const { data } = useQuery<CartItemType[]>("products", GetProducts);

  return (
    <Wrapper>
      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
